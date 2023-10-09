enum Pet { Cat, Dog, Rabbit }
console.log(Pet.Cat, Pet.Dog, Pet.Rabbit);

let Tom: Pet = Pet.Cat;
console.log(Tom);

Tom = Pet.Dog;
Tom = 12;
console.log(Tom);

enum Pet2 {
  Cat = 'cat',
  Dog = 'dog',
  Rabbit = 'rabbit',
}

let Jim: Pet = Pet.Cat;
Jim = 'mouse';
// 文字列 'dog'とPet2.dogは同一ではなく、方が一致しないので代入できない。
Jim = 'dog'

// リテラル型も存在する。
// 多いケースは文字列型。
let Mom: 'cat' = 'cat'
Mom = 'mouse'
// ユニオン型を利用して使うことがある。
let Mary: 'Cat' | 'Dog' | 'Rabbit' = 'Cat';
Mary = 'Rabbit';
Mary = 'Parrot';

