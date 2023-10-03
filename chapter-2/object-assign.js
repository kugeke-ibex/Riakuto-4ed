const original = { a: 1, b: 2, c: 3 };
const copy = Object.assign({}, original);
const copy2 = original
console.log(copy); // { a: 1, b: 2, c: 3 }
console.log(copy === original);  // false → 値が同じでもアドレスを共有しない別オブジェクト
console.log(copy2 === original); // true → 値が同じでアドレスも共有している同一オブジェクト
const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100 });
console.log(assigned); // { a: 1, b: 2, c: 10, d: 100 }
console.log(original); // { a: 1, b: 2, c: 10, d: 100 }
