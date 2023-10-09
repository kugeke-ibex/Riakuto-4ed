// 配列の場合は[]を利用して書く。
const numArr: number[] = [1, 2, 3];
console.log(numArr)
const strArr: Array<string> = ['one', 'two', 'three'];
console.log(strArr)
const words: object = ['foo', 'bar', 'baz'];
console.log(words)
// オブジェクト型の場合はプロパティのキー名と値の型を明記する。
const red: { rgb: string, opacity: number } = { rgb: 'ff0000', opacity: 1 };
console.log(red)
