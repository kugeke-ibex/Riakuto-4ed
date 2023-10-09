const greet = (friend: 'Serval' | 'Caracal' | 'Cheetah') => {
  switch (friend) {
    case 'Serval':
      return `Hello, ${friend}!`;
    case 'Caracal':
      return `Hi, ${friend}!`;
    case 'Cheetah':
      return `Hiya, ${friend}!`;
    // どれか一つのcase式をコメントアウトすると、エラーになる。
    default: {
      const check: never = friend;
    }
  }
};

console.log(greet('Serval')); // Hello, Serval!
// 常に例外を投げたり、無限ループで処理が永遠に終わらない関数の戻り値の型なんかにもneverを適用できる。
