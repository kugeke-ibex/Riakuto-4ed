// <>は型引数（Type Parameter）。
function toArray<T>(arg1: T, arg2: T) {
  return [arg1, arg2];
}

console.log(toArray<number>(8, 3));
console.log(toArray('foo', 'bar'));

const toArrayArrow = <T>(arg1: T, arg2: T) => [arg1, arg2];

console.log(toArrayArrow(true, false));
//console.log(toArrayArrow(5, 'baz')); => Argument of type 'string' is not assignable to parameter of type 'number'.

const toArrayVariably = <T>(...args: T[]): T[] => [...args];
console.log(toArrayVariably(1, 2, 3, 4, 5));

// toArrayVariably(6, '7', 8); Argument of type 'string' is not assignable to parameter of type 'number'.
