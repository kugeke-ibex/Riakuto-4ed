// strictNullChecksをtsconfig.jsonに追加するとエラーになる。
const foo: string = null;
const bar: number = undefined;

// nullを許容したい場合はUnion型に明示的に型指定
let hoge: null | string = 'foo';
hoge = null;
console.log(hoge)
