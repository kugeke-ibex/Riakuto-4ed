interface Todo {
  title: string;
  description: string;
  isDone: boolean;
}

// Pick<T, K> …… TからKが指定するキーのプロパティだけを抽出する
type PickedTodo = Pick<Todo, 'title' | 'isDone'>;
// Omit<T, K> …… TからKが指定するキーのプロパティを省く
type OmittedTodo = Omit<Todo, 'description'>;

