import {
  identity,
  compose
} from './chapter-1'

describe('Identity', () => {
  it('should take a thing and return the thing', () => {
    const x = 'buh'

    expect(identity(x)).toBe(x)
  })
})

describe('Compose', () => {
  it('should compose two functions', () => {
    const fnOne = x => x + 1
    const fnTwo = x => x * 3
    const composed = compose(fnTwo, fnOne)
    const x = 5

    expect(composed(x)).toBe(fnTwo(fnOne(x)))
  })
})

describe('Composition should respect identity', () => {
  const fn = x => x * x

  it('should respect identity A -> A -> B', () => {
    const x = 3

    expect(compose(identity, fn)(x)).toBe(fn(x))
  })

  it('should respect identity A -> B -> B', () => {
    const x = 4

    expect(compose(fn, identity)(x)).toBe(fn(x))
  })
})
