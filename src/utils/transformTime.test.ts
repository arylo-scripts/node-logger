import { describe, expect, it } from 'vitest'
import { transformTime } from './transformTime'

describe('transformTime', () => {
  it.each([
    [0, '0ms'],
    [999, '999ms'],
    [1_500, '1.50s'],
    [90_000, '1.50m'],
    [5_400_000, '1.50h'],
  ])('formats %i milliseconds as %s', (time, expected) => {
    expect(transformTime(time)).toBe(expected)
  })
})
