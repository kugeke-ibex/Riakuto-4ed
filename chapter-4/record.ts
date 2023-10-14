type Animal = 'cat' | 'dog' | 'rabbit';
// Record<K,T> …… Kの要素をキーとしプロパティ値の型をTとしたオブジェクトの型を作成する
type AnimalNote = Record<Animal, string>;

const animalKanji: AnimalNote = {
  cat: '猫',
  dog: '犬',
  rabbit: '兎',
};
