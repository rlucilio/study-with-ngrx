import { ToDo } from "./todo.model";

export class ToDoState {
  toDos: Array<ToDo>;
  toDoError: Error;
}

export const initializeState = (): ToDoState => ({ toDos: Array<ToDo>(), toDoError: null })
