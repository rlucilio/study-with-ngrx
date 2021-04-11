import { createReducer, on } from "@ngrx/store";
import { initializeState, ToDoState } from "./todo.state";
import * as ToDoActions from "./todo.actions";
import { ToDo } from "./todo.model";

const initialState = initializeState();

export const toDoReducer = createReducer(
  initialState,
  on(ToDoActions.getToDoAction, state => state),
  on(ToDoActions.createToDoAction, (state: ToDoState, toDo: ToDo) => ({
    ...state,
    toDos: [...state.toDos, toDo],
    toDoError: null
  })),
  on(ToDoActions.successGetToDoAction, (state: ToDoState, { payload }) => ({
    ...state,
    toDos: payload
  })),
  on(ToDoActions.successCreateToDoAction, (state: ToDoState, { payload }) => ({
    ...state,
    toDos: [...state.toDos, payload],
    toDoError: null
  })),
  on(ToDoActions.errorToDoAction, (state: ToDoState, error: Error) => {
    console.log(error);
    return {
      ...state,
      toDoError: error
    }
  })
)
