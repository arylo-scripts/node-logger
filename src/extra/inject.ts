import { storage } from '../storage'
import { castArray } from '../utils/castArray'

export function inject<F extends (...args: any[]) => any>(names: string | string[], cb: F) {
  const flag = castArray(names)
    .filter(Boolean)
    .map((name) => `[${name}]`)
    .join('')
  return storage.run(flag, cb)
}
