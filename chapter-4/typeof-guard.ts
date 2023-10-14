const fooo: unknown = '1,2,3,4';

// あるスコープ内での型を保証するチェックを行う式のことを型ガード（Type Guard）という。
if (typeof fooo === 'string') {
  console.log(fooo.split(','));
}
console.log(fooo.split(',')); // コンパイルエラー
