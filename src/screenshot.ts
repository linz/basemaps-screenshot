import { fsa } from '@chunkd/fs';
import { command, number, option, optional, string } from 'cmd-ts';
import { mkdir } from 'fs/promises';
import { chromium, Browser } from 'playwright';
import { logger } from './log.js';
import { DefaultTestTiles, TestTile } from './tiles.js';
import pLimit from 'p-limit';

export const CommandScreenshot = command({
  name: 'bms',
  description: 'Take screenshots of basemaps for validation',

  args: {
    url: option({ type: string, long: 'url', description: 'Basemaps Base URL' }),
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
    if (args.url.endsWith('/')) args.url = args.url.slice(args.url.length - 1);
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
  args: { output: string; url: string; concurrency: number; timeout: number; test?: string },
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

      const searchParam = new URLSearchParams();
      searchParam.set('p', test.tileMatrix);
      searchParam.set('i', test.tileSet);
      if (test.style) searchParam.set('s', test.style);
      if (test.terrain) {
        searchParam.set('terrain', test.terrain);
        searchParam.set('debug.terrain', test.terrain);
      }
      if (test.hillshade) searchParam.set('debug.hillshade', test.hillshade);

      const bearing = test.location.b ? test.location.b : 0;
      const pitch = test.location.p ? test.location.p : 0;
      const loc = `@${test.location.lat},${test.location.lng},z${test.location.z},b${bearing},p${pitch}`;
      const fileName = test.name + '.png';
      const output = fsa.join(args.output, fileName);

      await mkdir(`.artifacts/visual-snapshots/`, { recursive: true });

      let url = `${args.url}/?${searchParam.toString()}&debug=true&debug.screenshot=true#${loc}`;
      if (!url.startsWith('http')) url = `https://${url}`;

      logger.info({ url, expected: output }, 'Page:Load');
      page.setDefaultTimeout(args.timeout);
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
      await page.close();
    });
  });
  await Promise.all(proms);

  await ctx.close();
}
