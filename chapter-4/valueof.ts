type ValueOf<T> = T[keyof T];
type PermNum = ValueOf<typeof permissions>; // 1 | 2 | 4
