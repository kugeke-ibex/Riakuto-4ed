// 引数と戻り値をまとめて定義し、関数を『呼び出し可能オブジェクト（Call Signature）』として定義する。
// インターフェースで定義
{
  interface NumOp {
    (n: number, m: number): number;
  }

  const add: NumOp = function (n, m) {
    return n + m;
  };

  const subtract: NumOp = (n, m) => n - m;

  console.log(
    add(1, 2), // 3
    subtract(7, 2), // 5
  );
}

// インラインで定義
{
  const add: { (n: number, m: number): number } = function (n, m) {
    return n + m;
  };
  const subtract: { (n: number, m: number): number } = (n, m) => n - m;

  console.log(
    add(1, 2), // 3
    subtract(7, 2), // 5
  );
}

// インラインでアロー構文によって定義
{
  const add: (n: number, m: number) => number = function (n, m) {
    return n + m;
  };
  const subtract: (n: number, m: number) => number = (n, m) => n - m;

  console.log(
    add(1, 2), // 3
    subtract(7, 2), // 5
  );
}
