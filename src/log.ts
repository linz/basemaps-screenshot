import pino from 'pino';
import { PrettyTransform } from 'pretty-json-log';
import { ulid } from 'ulid';

const LogId = ulid();

export const logger = pino(process.stdout.isTTY ? PrettyTransform.stream() : undefined).child({ id: LogId });
