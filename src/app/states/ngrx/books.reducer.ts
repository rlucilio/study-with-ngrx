import { retrievedBookList } from './books.actions';
import { createReducer, on } from '@ngrx/store';
import { Book } from './model/book';

const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { book }) => [...book])
)
