import { Species2, Resident } from './resident';
const resident = new Resident(); // コンパイルエラー
  const patty: Resident = {
  name: 'Patty Rabbit',
  age: 8,
  species: 'rabbit',
};
console.log(patty);
