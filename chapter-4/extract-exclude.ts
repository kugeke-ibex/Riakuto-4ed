type Permission = 'r' | 'w' | 'x';
// Extract<T, U> …… TからUの要素だけを抽出する
type RW1 = Extract<Permission, 'r' | 'w'>;
// Exclude<T, U> …… TからUの要素を省く
type RW2 = Exclude<Permission, 'x'>;
