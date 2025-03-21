import { fsa } from '@chunkd/fs';
import { command, number, option, optional, string } from 'cmd-ts';
import { mkdir } from 'fs/promises';
import { chromium, Browser, Page } from 'playwright';
import { logger } from './log.js';
import { DefaultTestTiles, TestTile } from './tiles.js';
import pLimit from 'p-limit';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

export const CommandScreenshot = command({
  name: 'bms',
  description: 'Take screenshots of basemaps for validation',

  args: {
    url: option({ type: string, long: 'url', description: 'Basemaps Base URL' }),
    diffUrl: option({
      type: optional(string),
      long: 'diff-url',
      description: 'Basemaps Base URL for compare the difference',
    }),
    output: option({ type: string, long: 'output', description: 'Output location for screenshots' }),
    test: option({
      type: optional(string),
      long: 'test',
      description: 'Path of the json test file to replace default test',
    }),
    concurrency: option({
      type: number,
      long: 'concurrency',
      description: 'Number of screenshots to take at a time',
      defaultValue: () => 2,
    }),
    timeout: option({
      type: number,
      long: 'timeout',
      description:
        'Maximum waiting time for `networkidle` in milliseconds, defaults to 30 seconds, pass `0` to disable timeout.',
      defaultValue: () => 30000,
    }),
  },

  async handler(args) {
    if (args.url.endsWith('/')) args.url = args.url.substring(0, args.url.length - 1);
    const chrome = await chromium.launch();

    try {
      await takeScreenshots(chrome, args);
    } finally {
      chrome.close();
    }
  },
});

async function takeScreenshots(
  chrome: Browser,
  args: { output: string; url: string; concurrency: number; timeout: number; diffUrl?: string; test?: string },
): Promise<void> {
  const ctx = await chrome.newContext({ viewport: { width: 1280, height: 720 } });

  const Q = pLimit(Math.floor(args.concurrency));
  // await ctx.tracing.start({ screenshots: true, snapshots: true });

  const tests = [];

  if (args.test) {
    tests.push(...(await fsa.readJson<TestTile[]>(args.test)));
  } else {
    tests.push(...DefaultTestTiles);
  }

  const proms = tests.map((test) => {
    return Q(async () => {
      const page = await ctx.newPage();

      await mkdir(`.artifacts/visual-snapshots/`, { recursive: true });

      const fileName = test.name + '.png';
      const output = fsa.join(args.output, fileName);
      const url = prepareUrl(args.url, test);
      await takeScreenshot(page, url, output, args.timeout);

      // Compare diffs between two urls
      if (args.diffUrl) {
        const fileNameCompare = test.name + '-compare.png';
        const outputCompare = fsa.join(args.output, fileNameCompare);
        const urlCompare = prepareUrl(args.diffUrl, test);
        await takeScreenshot(page, urlCompare, outputCompare, args.timeout);
        const diffImg = fsa.join(args.output, test.name + '-diff.png');
        await compareDiff(output, outputCompare, diffImg);
      }
      await page.close();
    });
  });
  await Promise.all(proms);

  await ctx.close();
}

function prepareUrl(baseUrl: string, test: TestTile): string {
  const url = new URL(baseUrl);

  // We could allow different style or tileset like topographic vs topographic-v2 or force the test on same style
  const config = url.searchParams.get('config');
  const style = url.searchParams.get('style') ?? url.searchParams.get('s') ?? test.style;
  const tileSet = url.searchParams.get('i') ?? test.tileSet;

  // Clear all search parameters
  url.search = '';

  url.searchParams.set('i', tileSet);
  url.searchParams.set('tileMatrix', test.tileMatrix);
  if (style) url.searchParams.set('style', style);
  if (config) url.searchParams.set('config', config);
  if (test.terrain) {
    url.searchParams.set('terrain', test.terrain);
    url.searchParams.set('debug.terrain', test.terrain);
  }
  if (test.hillshade) url.searchParams.set('debug.hillshade', test.hillshade);

  url.searchParams.set('debug', 'true');
  url.searchParams.set('debug.screenshot', 'true');

  const bearing = test.location.b ?? 0;
  const pitch = test.location.p ?? 0;
  const loc = `@${test.location.lat},${test.location.lng},z${test.location.z},b${bearing},p${pitch}`;

  let urlStr = `${url.href}#${loc}`;
  if (!urlStr.startsWith('http')) urlStr = `https://${url}`;
  return urlStr;
}

async function takeScreenshot(page: Page, url: string, output: string, timeout: number): Promise<void> {
  logger.info({ url, expected: output }, 'Page:Load');
  page.setDefaultTimeout(timeout);
  const startTime = performance.now();
  try {
    await page.goto(url);
    await page.waitForSelector('div#map-loaded', { state: 'attached' });
    await page.waitForTimeout(250);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: output });
  } catch (error) {
    await page.screenshot({ path: output });
    logger.error({ url, error, duration: performance.now() - startTime }, 'Page:Load:Failure');
  }
  logger.info({ url, expected: output, duration: performance.now() - startTime }, 'Page:Load:Done');
}

async function compareDiff(img: string, CompareImg: string, output: string): Promise<void> {
  logger.info({ img, CompareImg, output }, 'Comparing two images');
  const img1 = PNG.sync.read(await fsa.read(img));
  const img2 = PNG.sync.read(await fsa.read(CompareImg));
  const { width, height } = img1;
  const diff = new PNG({ width, height });

  const match = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

  if (match > 0) {
    logger.warn({ img, CompareImg, output, match }, 'Difference detected between two images, check the output');
    await fsa.write(output, PNG.sync.write(diff));
  } else {
    logger.info({ img, CompareImg, output, match }, 'No difference detected between two images');
  }
}
