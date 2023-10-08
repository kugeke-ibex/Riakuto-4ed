console.log([...Array(3)])

console.log([...Array(3)].map((_, n) => {console.log(`${n + 1} times`)}))

console.log([...Array(3).keys()])

console.log([...Array(3).keys()].map((n) => {console.log(`${n + 1} times`)}))
