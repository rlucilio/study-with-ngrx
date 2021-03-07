import { addBook, removeBook } from './books.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
    initialState,
    on(removeBook, (state, { bookId }) => state.filter(id => id !== bookId)),
    on(addBook, (state, {bookId}) => {
        if (state.find(id => bookId === id)){ return state; }

        return [...state, bookId];
    })
)