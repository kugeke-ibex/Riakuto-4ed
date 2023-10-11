let id: number | string = 16384;
console.log(id)
id = 'one-two-three-four';
console.log(id)

interface A {
  foo: number;
  bar?: string;
}
interface B { foo: string; }
interface C { bar: string; }
interface D { baz: boolean; }

type AorB = A | B; // { foo: number; bar?: string } or { foo: string }
type AorC = A | C; // { foo: number; bar?: string } or { bar: string }
type AorD = A | D; // { foo: number; bar?: string } or { baz: boolean }
