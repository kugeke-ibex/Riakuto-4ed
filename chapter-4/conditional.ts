interface User { id: unknown }
type NewUser = User & { id: string };
type OldUser = User & { id: number };
interface Book { isbn: string }

// 条件付き型（Conditional Type）
type IdOf<T> = T extends User ? T['id'] : never;

type NewUserId = IdOf<NewUser>; // string
type OldUserId = IdOf<OldUser>; // number
type BookId = IdOf<Book>; // never
