import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ToDo } from '../todo.model';
import { ToDoState } from '../todo.state';
import { map } from "rxjs/operators";
import * as ToDoActions from "../todo.actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  toDoError: Error = null;
  toDoList: Array<ToDo> = [];
  title: string = '';
  isCompleted: boolean = false;
  todo$: Observable<ToDoState>
  toDoSub: Subscription;

  constructor(
    private store: Store<{ toDos: ToDoState }>
  ) {
    this.todo$ = this.store.select('toDos')
  }

  ngOnInit(): void {
    this.toDoSub = this.todo$
      .pipe(
        map(state => {
          this.toDoList = state.toDos;
          this.toDoError = state.toDoError;
        })
      ).subscribe()

      this.store.dispatch(ToDoActions.beginGetToDoAction())
  }

  createToDo() {
    const todo: ToDo = {
      isCompleted: this.isCompleted,
      title: this.title
    }

    this.store.dispatch(ToDoActions.beginCreateToDoAction({payload: todo}))
  }

  ngOnDestroy(): void {
    if (this.toDoSub){
      this.toDoSub.unsubscribe();
    }
  }
}
