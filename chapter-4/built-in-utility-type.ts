// Partial<T>  …… T のプロパティをすべて省略可能にする
type Partial<T> = { [K in keyof T]?: T[K] };
// Required<T> …… T のプロパティをすべて必須にする
type Required<T> = { [K in keyof T]: T[K] };
// Readonly<T> …… T のプロパティをすべて読み取り専用にする
type Readonly<T> = { readonly [K in keyof T]: T[K] };
