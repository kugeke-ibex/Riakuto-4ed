const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
};

const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Rolley Cocker';
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';

console.log(patty);
// {
// name: 'Patty Rabbit',
// email: 'patty@maple.town',
// address: { town: 'Maple Town' }
// }
// ただし、プロパティにDateオブジェクトや関数、undefinedなどが含まれると正しく動かない。
// その場合はユーティリティライブラリLodashのcloneDeep()やrfdcなどが使える
