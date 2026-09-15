import lodash from 'lodash'
import { storage } from '../storage'

export function updateFlag(names: string | string[]) {
  const flag = lodash
    .castArray(names)
    .map((name) => `[${name}]`)
    .join('')
  storage.enterWith(flag)
}
