// 関数型プログラミングのパラダイムでは主に下記の内容が該当する
// 1. 名前を持たないその場限りの関数（無名関数）を定義できる
// 2. 変数やデータ構造の値として関数を設定できる
// 3. 関数に引数として関数を渡したり、その戻り値に関数を設定できる（高階関数）
// 4. 関数に特定の引数を固定した新しい関数を作ることができる（部分適用）
// 5. 複数の高階関数を合成してひとつの関数にできる（関数合成）

const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  return sayHello;
};

// const greeter = (target) => {
//   return () => {
//     console.log(`Hi, ${target}!`);
//   };
// }

// const greeter = (target) => () => console.log(`Hi, ${target}!)`;

const greet = greeter('Step Jun');
greet(); // Hi, Step Jun!
