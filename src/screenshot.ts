import { fsa } from '@chunkd/fs';
import { command, option, string } from 'cmd-ts';
import { mkdir } from 'fs/promises';
import { chromium, Browser } from 'playwright';
import { logger } from './log.js';
import { DefaultTestTiles } from './tiles.js';

export const CommandScreenshot = command({
  name: 'bms',
  description: 'Take screenshots of basemaps for validation',

  args: {
    url: option({ type: string, long: 'url', description: 'Basemaps Base URL' }),
    output: option({ type: string, long: 'output', description: 'Output location for screenshots' }),
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

async function takeScreenshots(chrome: Browser, args: { output: string; url: string }): Promise<void> {
  for (const test of DefaultTestTiles) {
    const page = await chrome.newPage();

    const searchParam = new URLSearchParams();
    searchParam.set('p', test.tileMatrix);
    searchParam.set('i', test.tileSet);
    if (test.style) searchParam.set('s', test.style);

    const loc = `@${test.location.lat},${test.location.lng},z${test.location.z}`;
    const fileName = test.name + '.png';
    const output = fsa.join(args.output, fileName);

    await mkdir(`.artifacts/visual-snapshots/`, { recursive: true });

    let url = `${args.url}/?${searchParam.toString()}&debug=true&debug.screenshot=true#${loc}`;
    if (!url.startsWith('http')) url = `https://${url}`;

    logger.info({ url, expected: output }, 'Page:Load');

    await page.goto(url);

    try {
      await page.waitForSelector('div#map-loaded', { state: 'attached' });
      await page.waitForTimeout(1000);
      await page.waitForLoadState('networkidle');
      await page.screenshot({ path: output });
    } catch (e) {
      await page.screenshot({ path: output });
      throw e;
    }
    logger.info({ url, expected: output }, 'Page:Load:Done');
    await page.close();
  }
}
