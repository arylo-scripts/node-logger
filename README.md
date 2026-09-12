# node-logger

Context-aware logging helpers for Node.js build scripts.

## Install

```sh
npm install github:arylo-scripts/node-logger
```

## Usage

```ts
import logger from '@arylo-scripts/node-logger'

logger.inject('build', () => {
  logger.info('started')
})
```

## Development

```sh
npm install
npm run lint
npm run build
```
