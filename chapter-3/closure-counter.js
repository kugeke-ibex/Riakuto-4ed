const counter = () => {
  let count = 0;

  const countUp = () => {
    return count += 1;
  };

  return countUp;
};

// アロー関数で実用的にまとめると
// const counter = (count = 0) => (adds = 1) => count += adds;
// クロージャーとは、関数と『その関数が作られた環境』の2 つが一体となった特殊なオブジェクトのことを指す。
// 閉じ込めてる外側の関数counter は『エンクロージャ（Enclosure）』とも呼ぶ。
// メモリのライフサイクル
// 1. 必要なメモリを割り当てる
// 2. 割り当てられたメモリを使用する
// 3. 必要がなくなったら、割り当てたメモリを解放する => 自動的に解放する機能のことをガベージコレクタ（Garbage Collector）
