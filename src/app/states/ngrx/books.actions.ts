import { createAction, props } from '@ngrx/store';


export const addBook = createAction(
    '[Book List] Add Book',
    props<{ bookId }>()
    );

export const removeBook = createAction(
    '[Book Collection] Remove Book',
    props<{ bookId }>()
);

export const retrievedBookList = createAction(
    '[Book List/Api] Retrieve Books Success',
    props<{ book }>()
);

