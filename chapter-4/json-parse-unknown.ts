const str = `{"id": 1, "username": "patty"}`;
const user: unknown = JSON.parse(str);

console.log(user.id, user.address.zipCode);
// error TS2339: Property 'id' does not exist on type 'unknown'.
// error TS2339: Property 'address' does not exist on type 'unknown'.
