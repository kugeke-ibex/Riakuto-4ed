const overMerge = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2,
});

overMerge({ a: 1 }, { a: 4, b: 8 }); // { a: 1, b: 8 }
overMerge({ a: 3 }, { n: 6, m: 9 }); // コンパイルエラー
