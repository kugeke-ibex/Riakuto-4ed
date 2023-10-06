// > function Person(name) { this.name = name; return this; }
// > Person('somebody');
// <ref *1> Object [global] {
// global: [Circular *1],
// ︙
// name: 'somebody'
// }
// > this.name
// 'somebody'
// > name
// 'somebody'

// 'use strict'でグローバル汚染を防ぐ
// > function Person(name) { 'use strict'; this.name = name; return this; };
// > Person('somebody');
// Uncaught TypeError: Cannot set properties of undefined (setting 'name')
// at Person (REPL1:1:49)

// クラス構文でも自動的にstrictモードが適応される。
// > class Foo { constructor() { console.log('`this` is', this); } }
// > Foo();
// Uncaught TypeError: Class constructor Foo cannot be invoked without 'new'
// > new Foo();
// `this` is Foo {}

// ES2020 `globalThis`というグローバルスコープに存在する定数から参照できる。
// > function fn() { 'use strict'; console.log(this); console.log(globalThis); };
// > fn();
// undefined
// <ref *1> Object [global] {
// global: [Circular *1],
// queueMicrotask: [Function: queueMicrotask],
// clearImmediate: [Function: clearImmediate],
// ︙
