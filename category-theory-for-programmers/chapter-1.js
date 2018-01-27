export const identity = x => x

export const composeTwo = (fn1, fn2) => (
  x => fn2(fn1(x))
)

export const compose = (...fns) => (
  fns.reverse().reduce((result, current) => x => current(result(x)))
)
