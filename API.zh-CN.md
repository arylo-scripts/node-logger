# API

[English](./API.md) | 简体中文

## 日志

```ts
logger.log(...args)
logger.debug(...args)
logger.info(...args)
logger.warn(...args)
logger.error(...args)
```

这些方法会先添加当前生效的上下文标签，然后转发到对应的 `console` 方法。
`debug` 会转发到 `console.log`。

## `inject(names, callback)`

在一个或多个上下文标签下运行 `callback`。该方法返回 `callback` 的返回值；
如果 `callback` 是异步函数，则返回 `Promise`。

```ts
const result = await logger.inject('build', async () => {
  logger.info('compiling') // 输出: [build] compiling
  return 'done'
})
```

嵌套调用 `inject` 时，新的标签会替换嵌套回调中当前生效的标签。

## `updateFlag(names)`

不包裹回调，直接更新当前异步执行上下文的上下文标签。

```ts
logger.updateFlag(['watch', 'server'])
logger.info('ready') // 输出: [watch][server] ready
```

## `group(label, callback, options?)`

记录同步或异步操作的开始与结束。该辅助方法返回 `callback` 的结果，默认使用
`logger.log`。

```ts
await logger.group('compile', async () => { // 输出: compile ...
  await compile()
}) // 输出: compile ... Done - ET 1.25s
```

通过 `options.loggerFn` 使用其他日志方法：

```ts
await logger.group('compile', compile, { loggerFn: logger.info })
```

## `time(label, options?)`

启动计时器并返回 `end()` 函数。该辅助方法默认使用 `logger.info`。

```ts
const timer = logger.time('compile') // 输出: compile

await compile()
timer.end() // 输出: compile - ET 1.25s
```

通过 `options.loggerFn` 使用其他日志方法：

```ts
const timer = logger.time('compile', { loggerFn: logger.debug })
```
