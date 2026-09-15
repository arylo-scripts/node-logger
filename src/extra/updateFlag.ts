import { storage } from '../storage'
import { castArray } from '../utils/castArray'

export function updateFlag(names: string | string[]) {
  const flag = castArray(names)
    .filter(Boolean)
    .map((name) => `[${name}]`)
    .join('')
  storage.enterWith(flag)
}
