// 『ユーザー定義の型ガード（User-Defined Type Guards』
type User3 = { username: string; address: { zipcode: string; town: string } };

// 「arg is User3」は型述語（Type Predicate）。この関数がtrue を返す場合に引数argの型がUser3であることがコンパイラに示唆される。
const isUser = (arg: unknown): arg is User3 => {
  const u = arg as User3;
  return (
    typeof u?.username === 'string' &&
    typeof u?.address?.zipcode === 'string' &&
    typeof u?.address?.town === 'string'
  );
};


const u1: unknown = JSON.parse('{}');
const u2: unknown = JSON.parse(
  '{ "username": "patty", "address": "Maple Town" }'
);
const u3: unknown = JSON.parse(
  '{ "username": "patty", "address": { "zipcode": "111", "town": "Maple Town" } }'
);
[u1, u2, u3].forEach((u) => {
  if (isUser(u)) {
    console.log(`${u.username} lives in ${u.address.town}`);
  } else {
    console.log("It's not User");
    console.log(`${u.username} lives in ${u.address.town}`); // コンパイルエラー
  }
});
