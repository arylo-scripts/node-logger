import { headParams } from '@arylo-scripts/function-control'
import { storage } from './storage'

function transform(fn: (...args: any[]) => any, flag?: string) {
  return flag ? headParams(fn, flag) : fn
}

export const baseLogger = Object.freeze({
  log: (...args: any[]) => transform(console.log, storage.getStore())(...args),
  debug: (...args: any[]) => transform(console.log, storage.getStore())(...args),
  info: (...args: any[]) => transform(console.info, storage.getStore())(...args),
  warn: (...args: any[]) => transform(console.warn, storage.getStore())(...args),
  error: (...args: any[]) => transform(console.error, storage.getStore())(...args),
} as {
  log: typeof console.log
  debug: typeof console.log
  info: typeof console.info
  warn: typeof console.warn
  error: typeof console.error
})
