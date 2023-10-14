type Company = 'Apple' | 'IBM' | 'GitHub';

// ・Lowercase<T> …… Tの各要素の文字列をすべて小文字にする
type C1 = Lowercase<Company>; // 'apple' | 'ibm' | 'github'

// Uppercase<T> …… Tの各要素の文字列をすべて大文字にする
type C2 = Uppercase<Company>; // 'APPLE' | 'IBM' | 'GITHUB'

// Uncapitalize<T> …… Tの各要素の文字列の頭を小文字にする
type C3 = Uncapitalize<Company>; // 'apple' | 'iBM' | 'gitHub'

// Capitalize<T> …… Tの各要素の文字列の頭を大文字にする
type C4 = Capitalize<C3>; // 'Apple' | 'IBM' | 'GitHub';
