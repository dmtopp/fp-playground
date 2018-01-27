import {
  memoize
} from './chapter-2'

describe('Memoize', () => {
  it('should produce the same result as the original function', () => {
    const myFn = () => 'buh'
    const myMemoizedFn = memoize(myFn)

    expect(myMemoizedFn()).toBe(myFn())
  })

  it('should not repeat work if it has already been called with the same arg', () => {
    const sideEffect = jest.fn(arg => arg)
    const myFn = arg => sideEffect(arg)
    const myMemoizedFn = memoize(myFn)

    expect(myMemoizedFn('hey')).toBe('hey')
    expect(myMemoizedFn('you')).toBe('you')
    expect(myMemoizedFn('you')).toBe('you')
    expect(myMemoizedFn('jeez')).toBe('jeez')
    expect(myMemoizedFn('you')).toBe('you')
    expect(sideEffect).toHaveBeenCalledTimes(3)
  })
})

describe('Memoizing Math.random()', () => {
  it('will probably not work', () => {
    const memoized = memoize(Math.random)

    expect(memoized()).toBe(memoized())
    expect(memoized()).not.toBe(Math.random())
  })
})
