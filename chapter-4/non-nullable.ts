type T1 = NonNullable<string | number | undefined>;
type T2 = NonNullable<number[] | null | undefined>;

const str: T1 = undefined; // コンパイルエラー
const arr: T2 = null; // コンパイルエラー
