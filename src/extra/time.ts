import { baseLogger } from '../base'
import { transformTime } from '../utils/transformTime'

const DEFAULT_TIME_OPTIONS = { loggerFn: baseLogger.info }
type TimeOptions = { loggerFn: (typeof baseLogger)[keyof typeof baseLogger] }

export function time(label: string, options: TimeOptions = DEFAULT_TIME_OPTIONS) {
  const { loggerFn } = Object.assign({}, DEFAULT_TIME_OPTIONS, options)

  const startTime = Date.now()
  loggerFn(label)
  return {
    end: () => loggerFn(label, `ET ${transformTime(Date.now() - startTime)}`),
  }
}
