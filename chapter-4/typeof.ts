console.log(typeof 100); // 'number'

const arr = [1, 2, 3];
console.log(typeof arr); // 'object'

type NumArr = typeof arr;
const val1: NumArr = [4, 5, 6];
const val2: NumArr = ['foo', 'bar', 'baz']; // コンパイルエラー
