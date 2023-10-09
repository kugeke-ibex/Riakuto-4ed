// カリー化とは『複数の引数を取る関数を、より少ない引数を取る関数に分割して入れ子にすること』
// 複数の引数を取る関数を、引数が『元の関数の最初の引数』で戻り値が『引数として元の関数の残りの引数を取り、それを使って結果を返す関数』である高階関数にすることを『カリー化』と呼ぶ。

// カリー化前
{
  const multiply = (n, m) => n * m;
  console.log(multiply(2, 4)); // 8
}

// カリー化
{
  const withMultiple = (n) => {
    return (m) => n * m;
  };
  console.log(withMultiple(2)(4)); // 8
}

// アロー関数式でカリー化
{
  const withMultiple = (n) => (m) => n * m;
  // return文と波括弧を省略しない場合は下記の通り
  // const withMultiple = (n) => {return (m) => {return n * m}};
  console.log(withMultiple(2)(4)); // 8
}
