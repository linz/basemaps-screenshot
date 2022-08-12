import { run } from 'cmd-ts';
import { CommandScreenshot } from './screenshot.js';

run(CommandScreenshot, process.argv.slice(2));
