import lodash from 'lodash'
import { storage } from '../storage'

export function inject<F extends (...args: any[]) => any>(names: string | string[], cb: F) {
  const flag = lodash
    .castArray(names)
    .map((name) => `[${name}]`)
    .join('')
  return storage.run(flag, cb)
}
