type Each<T> = T extends Array<infer U> ? U : T;

const num = 5;
const arr2 = [3, 6, 9];
type ArrEach = Each<typeof arr2>; // number
type NumEach = Each<typeof num>; // 5
