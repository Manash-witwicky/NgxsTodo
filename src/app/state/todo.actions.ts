import { Todo } from './todo.model';
export class AddTodo {
  static readonly type = '[TODO] Add Todo';
  constructor(public payload: Todo) {}
}

export class RemoveTodo {
  static readonly type = '[TODO] Remove Todo';
  constructor(public payload: number) {}
}
