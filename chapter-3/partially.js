// カリー化された関数の一部の引数を固定して新しい関数を作ることを『関数の部分適用』という。

const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5)); // 15

const triple = withMultiple(3);
console.log(triple(5)); // 15
