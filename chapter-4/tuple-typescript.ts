// 個々の要素の型に加えて、その順番や数に制約を設けられる特殊な配列の型を『タプル』と呼ぶ。
const charAttrs: [number, string, boolean] = [1, 'patty', true];
// レストパラメータも利用可能。
const spells: [number, ...string[]] = [7, 'heal', 'sizz', 'snooz'];
