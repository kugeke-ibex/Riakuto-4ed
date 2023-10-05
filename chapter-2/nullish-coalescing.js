const users = [
  {
    name: 'Patty Rabbit',
    address: {
      town: 'Maple Town',
    },
  },
  {
    name: 'Rolley Cocker',
    address: {},
  },
  null,
];
for (const u of users) {
  const user = u ?? { name: '(Somebody)' };
  const town = user?.address?.town ?? '(Somewhere)';
  console.log(`${user.name} lives in ${town}`);
}

// const obj = {};
// console.log(obj.foo) undefined
// console.log(obj.foo.bar) Uncaught TypeError: Cannot read property 'bar' of undefined
// console.log(obj?.foo?.bar) undefined
// メソッドでも可能
// foo?.bar()?.baz()

