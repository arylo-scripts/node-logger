import { baseLogger } from '../base'
import { transformTime } from '../utils/transformTime'

const DEFAULT_GROUP_OPTIONS = { loggerFn: baseLogger.log }
type GroupOptions = { loggerFn: (typeof baseLogger)[keyof typeof baseLogger] }

export function group<R extends any | Promise<any>, CB extends () => R>(
  label: string,
  cb: CB,
  options: GroupOptions = DEFAULT_GROUP_OPTIONS,
) {
  const { loggerFn } = Object.assign({}, DEFAULT_GROUP_OPTIONS, options)

  const startTime = Date.now()
  loggerFn(label, '...')
  const end = () => loggerFn(label, `... Done - ET ${transformTime(Date.now() - startTime)}`)
  const result = cb()
  if (result instanceof Promise) {
    return result.finally(end)
  } else {
    end()
    return result
  }
}
