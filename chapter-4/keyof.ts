const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
};

console.log(typeof permissions) // object
type PermChar = keyof typeof permissions;

const readable: PermChar = 'r';
const writable: PermChar = 'z'; // コンパイルエラー
