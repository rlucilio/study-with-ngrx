import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from "rxjs/operators";
import * as ToDoActions from "./todo.actions";
import { ToDo } from './todo.model';

@Injectable()
export class TodoEffectsService{
  private apiURL = 'https://607210c296729a0017779425.mockapi.io/api/to-do';
  private getToDos$: Observable<Action>;
  private createToDo$: Observable<Action>;

  constructor(
    private http: HttpClient,
    private action$: Actions
  ) {
    this.createRequestGetToDo();
    this.createRequestNewToDo();
  }

  private createRequestNewToDo() {
    this.createToDo$ = createEffect(() => {
      return this.action$.pipe(
        ofType(ToDoActions.beginCreateToDoAction),
        mergeMap(action => {
          return this.http.post(this.apiURL, action.payload)
            .pipe(
              map((data: ToDo) => {
                return ToDoActions.successCreateToDoAction({ payload: data });
              }),
              catchError((error: Error) => {
                return of(ToDoActions.errorToDoAction(error));
              })
            );
        })
      );
    });
  }

  private createRequestGetToDo() {
    this.getToDos$ = createEffect(() => {
      return this.action$.pipe(
        ofType(ToDoActions.beginGetToDoAction),
        mergeMap(action => {
          return this.http.get(this.apiURL)
            .pipe(
              map((data: ToDo[]) => {
                return ToDoActions.successGetToDoAction({ payload: data });
              }),
              catchError((error: Error) => {
                return of(ToDoActions.errorToDoAction(error));
              })
            );
        })
      );
    });
  }
}
