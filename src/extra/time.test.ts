import { describe, expect, it, vi } from 'vitest'
import { time } from './time'

describe('time', () => {
  it('logs elapsed time with a - ET prefix', () => {
    vi.useFakeTimers()

    const loggerFn = vi.fn()
    const timer = time('compile', { loggerFn })

    vi.advanceTimersByTime(1_500)
    timer.end()

    expect(loggerFn).toHaveBeenNthCalledWith(1, 'compile')
    expect(loggerFn).toHaveBeenNthCalledWith(2, 'compile', '- ET 1.50s')

    vi.useRealTimers()
  })
})
