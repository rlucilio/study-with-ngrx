import { createAction, props } from "@ngrx/store";
import { ToDo } from "./todo.model";

export const getToDoAction = createAction('[ToDo] - Get ToDo');

export const createToDoAction = createAction('[ToDo] - Create ToDo', props<ToDo>());

export const beginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const beginCreateToDoAction = createAction('[ToDo] - Begin Create ToDo', props<{ payload: ToDo }>());

export const successGetToDoAction = createAction('[ToDo] - Success Get ToDo', props<{ payload: ToDo[] }>());

export const successCreateToDoAction = createAction('[ToDo] - Success Create ToDo', props<{ payload: ToDo }>());

export const errorToDoAction = createAction('[ToDo] - Error ToDo', props<Error>());
