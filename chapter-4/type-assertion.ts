type User2 = { username: string; address: { zipcode: string; town: string } };

const stringJson = `{ "username": "patty", "town": "Maple Town" }`;
const data: unknown = JSON.parse(stringJson);
const user = data as User2;

console.log(user.address.town); // TypeError: Cannot read property 'town' of undefined
// 型アサーションは根拠なく開発者の判断がまかりとおる、型安全性がまったく保証されない方法

const n = 123;
const s1 = String(n);
console.log(typeof s1); // string
const s2 = n as string;

// 型キャストはこれは異なるデータ型の値を任意の型にコンバートするもの。
// 型アサーションはあくまでコンパイラによる型の解釈が変わるだけであって、実際の値が変化するわけじゃない。
// asの記述はT as (U extends T) または(T extends U) as U であるとき、つまりTがU のサブタイプであるかU がT のサブタイプである場合に限る。

// (someValue as unknown) as SomeType のようにいったんunkonwn 型を挟む形で二重アサーションを行えばコンパイルを通る。
const s = (123 as unknown) as string;
s.split('2');
