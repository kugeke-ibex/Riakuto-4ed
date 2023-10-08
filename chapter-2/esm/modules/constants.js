// 常に strict モードが適用される
// トップレベルで定義された変数がグローバルスコープに展開されることはなく、そのモジュール内のローカル変数になる
const ONE = 1;
const TWO = 2;
export { ONE, TWO };
export const TEN = 10;
