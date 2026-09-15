# API

English | [简体中文](./API.zh-CN.md)

## Logging

```ts
logger.log(...args)
logger.debug(...args)
logger.info(...args)
logger.warn(...args)
logger.error(...args)
```

The methods forward to the matching `console` method after prepending the
active context labels. `debug` forwards to `console.log`.

## `inject(names, callback)`

Runs `callback` with one or more context labels. It returns the callback's
return value, including a `Promise` when the callback is asynchronous.

```ts
const result = await logger.inject('build', async () => {
  logger.info('compiling') // Output: [build] compiling
  return 'done'
})
```

Nested `inject` calls replace the active labels inside the nested callback.

## `updateFlag(names)`

Updates the context labels for the current asynchronous execution context
without wrapping a callback.

```ts
logger.updateFlag(['watch', 'server'])
logger.info('ready') // Output: [watch][server] ready
```

## `group(label, callback, options?)`

Logs the start and end of a synchronous or asynchronous operation. The helper
returns the callback's result and uses `logger.log` by default.

```ts
await logger.group('compile', async () => { // Output: compile ...
  await compile()
}) // Output: compile ... Done - ET 1.25s
```

Pass `options.loggerFn` to use another logger method:

```ts
await logger.group('compile', compile, { loggerFn: logger.info })
```

## `time(label, options?)`

Starts a timer and returns an `end()` function. The helper uses `logger.info`
by default.

```ts
const timer = logger.time('compile') // Output: compile

await compile()
timer.end() // Output: compile - ET 1.25s
```

Pass `options.loggerFn` to use another logger method:

```ts
const timer = logger.time('compile', { loggerFn: logger.debug })
```
