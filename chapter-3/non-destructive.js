const list = [4, 8, 2, 6];

// slice()はシャローコピーして新しい配列を返す
const sortedList = list.slice().sort((n, m) => n < m ? -1 : 1);
console.log(sortedList, list); // [2, 4, 6, 8] [4, 8, 2, 6]

// スプレッド構文で展開する
const reverseList = [...list].reverse();
console.log(reverseList, list); // [6, 2, 8, 4] [4, 8, 2, 6]

// 配列の前後に追加するのもスプレッド構文でできる。
// 破壊的メソッドのpush()とunshift()を使う必要がない。
const preSuffixList = [1, ...list, 9];
console.log(preSuffixList, list)
