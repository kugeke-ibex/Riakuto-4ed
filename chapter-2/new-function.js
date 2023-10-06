// Node.js v14.4.0 以前で実行のこと
function dump() {
  console.log('`this` is', this);
}

const obj = new dump();
// obj はdump.prototype とアドレスを共有しない新規のオブジェクト
console.log(obj !== dump.prototype) // true
