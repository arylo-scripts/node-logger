import { headParams } from '@arylo-scripts/function-control'
import { storage } from './storage'

export const baseLogger = Object.freeze({
  log: (...args: any[]) => headParams(console.log, storage.getStore())(...args),
  debug: (...args: any[]) => headParams(console.log, storage.getStore())(...args),
  info: (...args: any[]) => headParams(console.info, storage.getStore())(...args),
  warn: (...args: any[]) => headParams(console.warn, storage.getStore())(...args),
  error: (...args: any[]) => headParams(console.error, storage.getStore())(...args),
} as {
  log: typeof console.log
  debug: typeof console.log
  info: typeof console.info
  warn: typeof console.warn
  error: typeof console.error
})
