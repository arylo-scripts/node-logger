# node-logger

Context-aware logging helpers for Node.js build scripts.

## Install

```sh
npm install @arylo-scripts/node-logger
```

## Usage

```ts
import logger from '@arylo-scripts/node-logger'

logger.info('application started')

await logger.inject('build', async () => {
  logger.info('started')

  await logger.inject('assets', () => {
    logger.warn('asset is missing')
  })
})
```

`inject` uses `AsyncLocalStorage`, so the same logger can add one or more scopes
to messages without replacing the global console.

## API

- `logger.log(...args)`
- `logger.debug(...args)`
- `logger.info(...args)`
- `logger.warn(...args)`
- `logger.error(...args)`
- `logger.inject(names, callback)`

## Development

```sh
npm install
npm run lint
npm run build
```
