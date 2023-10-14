const f1 = (a: number, b: string) => { console.log(a, b); };
const f2 = () => ({ x: 'hello', y: true });

// Parameters<T> ・ …… Tの引数の型を抽出し、タプル型で返す
type P1 = Parameters<typeof f1>; // [number, string]
type P2 = Parameters<typeof f2>; // []
// ReturnType<T> …… Tの戻り値の型を返す
type R1 = ReturnType<typeof f1>; // void
type R2 = ReturnType<typeof f2>; // { x: string; y: boolean }
