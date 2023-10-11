interface T { foo: number }
interface U { bar: string }
interface V {
  foo?: number;
  baz: boolean;
}

// 同じ型でありながら必須と省略可能が交差したら、必須のほうが優先
type TnU = T & U; // { foo: number; bar: string }
type TnV = T & V; // { foo: number; baz: boolean }
type VnTorU = V & (T | U);
// { foo: number; baz: boolean } or { foo?: number; bar: string; baz: boolean }
