// Tiny, recursive autocurry
const curry = (f, arr = []) => (
  (...args) => (
    a => a.length === f.length ?
      f(...a) :
      curry(f, a)
  )([...arr, ...args])
)

const add3 = curry((a, b, c) => a + b + c);

const result = add3(1, 3).toString()

console.log(result)

const buh = (x, y) => {
  console.log(...args)
}

buh(2, 3)
