import { describe, expect, it } from 'vitest'
import { castArray } from './castArray'

describe('castArray', () => {
  it('wraps a single value in an array', () => {
    expect(castArray('build')).toEqual(['build'])
  })

  it('returns an array unchanged', () => {
    const values = ['build', 'assets']

    expect(castArray(values)).toBe(values)
  })
})
