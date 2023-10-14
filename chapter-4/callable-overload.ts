interface Transform {
  (): void;
  (item: Brooch): void;
  (item: Compact): void;
}
// 呼び出し可能オブジェクトのプロパティの型にはアロー構文が使えない。

const transform2: Transform = (item?) => {
  if (item instanceof Brooch) {
    console.log('Moon crystal power , make up!!');
  } else if (item instanceof CosmicCompact) {
    console.log('Moon cosmic power , make up!!!');
  } else if (item instanceof CrisisCompact) {
    console.log('Moon crisis , make up!');
  } else if (!item) {
    console.log('Moon prisim power , make up!');
  } else {
    console.log('Item is fake... ');
  }
};
