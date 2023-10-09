const isSucceeded = Math.random() < 0.5;

const promise = new Promise((resolve, reject) => {
  if (isSucceeded) {
    resolve('Success');
  } else {
    reject(new Error('Failure'));
  }
});

promise.then((value) => {
  console.log('1.', value);
    return 'Succees again';
  })
  .then((value) => {
    console.log('2.', value);
  })
  .catch((error) => {
    console.error('3.', error);
  })
  .finally(() => {
    console.log('4.', 'Completed');
  });

// Promise のコンスタラクタには引数として『実行関数（Executor）』を渡し、その第1引数が『履行ハンドラ（Fulfillment Handler）』、第2 引数が『拒否ハンドラ（Rejection Handler）』と呼ばれるコールバック関数になっていて、それぞれPromise が成功時と失敗時に返すものをその引数として渡すようになってる。
