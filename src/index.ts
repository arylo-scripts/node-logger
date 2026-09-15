import { baseLogger } from './base'
import { group } from './extra/group'
import { inject } from './extra/inject'
import { time } from './extra/time'
import { updateFlag } from './extra/updateFlag'

export const logger = Object.freeze({
  ...baseLogger,
  inject,
  group,
  time,
  updateFlag,
} as const)

export default logger
