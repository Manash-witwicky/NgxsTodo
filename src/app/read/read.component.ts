import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TodoState } from './../state/todo.state';
import { RemoveTodo } from './../state/todo.actions';
import { Todo } from './../state/todo.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @Select(TodoState.getTodo)
  todo$: Observable<Todo>;

  constructor(private store: Store) {}

  deleteTodo(id) {
    this.store.dispatch(new RemoveTodo(id));
  }

  ngOnInit() {
  }

}
