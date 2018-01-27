const { stringify } = JSON

export const memoize = fn => {
  const cache = new Map()

  return (...args) => {
    const cached = cache.get(stringify(args))
    if (cached) return cached

    const result = fn(...args)
    cache.set(stringify(args), result)
    return result
  }
}

// How many functions are there from Bool -> Bool?
const negate = bool => !bool
const identity = bool => bool
