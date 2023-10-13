const permissions2 = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
};

// as const は『Const アサーション（Const Assertions）』。定数としての型注釈を付与。
// 一つにまとめる事も可能。
// as const を外すと number になる。
const permissions3 = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
} as const;

type PermChar2 = keyof typeof permissions2; // 'r' | 'w' | 'x'
// 意味的には　typeof (permissions2[PermChar2]) ではなく、(typeof permissions2)[PermChar2]
type PermNum2 = typeof permissions2[PermChar2]; // 1 | 2 | 4
//
console.log(permissions2['r']) // 4

// 配列の場合
const species = ['rabbit', 'bear', 'fox', 'dog'] as const;
console.log(typeof species);
// numberは 0, 1, 2, 3 などのインデックス番号の型。
type Species = typeof species[number]; // 'rabbit' | 'bear' | 'fox' | 'dog'
