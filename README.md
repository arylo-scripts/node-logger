# node-logger

English | [简体中文](./README.zh-CN.md)

Context-aware logging helpers for Node.js build scripts.

`node-logger` prefixes console output with one or more context labels and
provides small helpers for grouped logs and elapsed-time measurements.

## Install

```sh
npm install @arylo-scripts/node-logger
```

Runtime requires Node.js >=13.10.0.

## Usage

```ts
import logger from '@arylo-scripts/node-logger'

logger.info('application started') // Output: application started

await logger.inject('build', async () => {
  logger.info('started') // Output: [build] started

  await logger.inject(['build', 'assets'], () => {
    logger.warn('asset is missing') // Output: [build][assets] asset is missing
  })
})
```

`inject` uses `AsyncLocalStorage`, so context labels apply only inside the
provided callback and are preserved across asynchronous operations.

## API

See the [API reference](./API.md).

## Development

```sh
npm install
npm run lint
npm test
npm run build
```
