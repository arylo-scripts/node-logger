# node-logger

[English](./README.md) | 简体中文

面向 Node.js 构建脚本的上下文感知日志辅助工具。

`node-logger` 会为控制台输出添加一个或多个上下文标签，并提供用于分组日志
和耗时统计的小型辅助方法。

## 安装

```sh
npm install @arylo-scripts/node-logger
```

运行时需要 Node.js >=13.10.0。

## 使用

```ts
import logger from '@arylo-scripts/node-logger'

logger.info('application started') // 输出: application started

await logger.inject('build', async () => {
  logger.info('started') // 输出: [build] started

  await logger.inject(['build', 'assets'], () => {
    logger.warn('asset is missing') // 输出: [build][assets] asset is missing
  })
})
```

`inject` 使用 `AsyncLocalStorage`，因此上下文标签只会在提供的回调内生效，
并会跨异步操作保留。

## API

参见 [API 参考](./API.zh-CN.md)。

## 开发

```sh
npm install
npm run lint
npm test
npm run build
```
