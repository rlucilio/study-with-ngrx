import { Book } from './model/book';
import { AppState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const booksSelectors = createSelector(
    (state: AppState) =>  state.books,
    (books: Array<Book>) => books
);

export const selectCollectionState = createFeatureSelector<AppState, ReadonlyArray<string>>('collections');

export const selectorBookCollection = createSelector(
    booksSelectors,
    selectCollectionState,
    (books, collection) =>  collection.map(id => books.find(book => book.id === id))
);
