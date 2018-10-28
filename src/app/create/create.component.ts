import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from './../state/todo.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }


  addTodo(id, name) {
    this.store.dispatch(new AddTodo({id: id, name: name}));
  }

  ngOnInit() {
  }

}
