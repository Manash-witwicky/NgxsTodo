import { Todo } from './todo.model';
import { AddTodo, RemoveTodo } from './todo.actions';
import { Action, State, StateContext, Selector, Actions } from '@ngxs/store';


// creating a state model

export class TodoModel {
  todoList: Todo[];
}



@State<TodoModel>({
  name: 'TodoState',
  defaults: {
    todoList: []
  }
})

// here we will define the selector and actions inside state class

export class TodoState {

  @Selector()
  static getTodo(state: TodoModel) {
    return state.todoList;
  }

  @Action(AddTodo)
  add({getState, patchState}: StateContext<TodoModel>, {payload}: AddTodo) {
    const state = getState();   // getting the current state
    patchState({
      todoList: [...state.todoList, payload]
    });

  }

  @Action(RemoveTodo)
  remove({getState, patchState}: StateContext<TodoModel>, {payload}: RemoveTodo) {
    patchState({
      todoList: getState().todoList.filter(data => data.id !== payload)
    });

  }
}
