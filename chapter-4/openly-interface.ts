// インターフェイスは新しいプロパティの型定義を追加することが可能。
// => 『Declaration Merging（宣言のマージ）』という。
// インターフェイスか型エイリアスどちらを使うかは状況によって変わり、主にインターフェイス。Reactについてはより厳密性も持たせる場合は型エイリアスを利用する。
interface User {
  name: string;
}

interface User {
  age: number;
}

interface User {
  species: 'rabbit' | 'bear' | 'fox' | 'dog';
}

const rolley: User = {
  name: 'Rolley Cocker',
  age: 8,
  species: 'dog',
};

console.log(rolley)
