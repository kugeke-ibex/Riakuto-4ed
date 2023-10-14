const q1 = 'SELECT * FROM users';
const q2 = 'SELECT id, body, createdAt FROM posts';
const q3 = 'SELECT userID, postID FROM comments';
const q4 = 'SELECT userID, postID FRO comments';

type PickTable<T extends string> = T extends `SELECT ${string} FROM ${infer U}` ? U : never;
type Tables = PickTable<typeof q1 | typeof q2 | typeof q3>; // 'users' | 'posts' | 'comments'
type neverQuery = PickTable<typeof q4> // never
