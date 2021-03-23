import { collectionReducer } from './states/ngrx/collections.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { counterReducer } from 'src/app/basic/ngrx/counter.reducers';
import { ComponentTestComponent } from './basic/component-test.component';
import { booksReducer } from './states/ngrx/books.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './states/books/books.component';
import { BookCollectionComponent } from './states/book-collection/book-collection.component';
import { ActionsComponent } from './actions/actions/actions.component';
import * as fromScoreboard from './reducers/scoreboard.reducer';
import { SelectorsComponent } from './selectors/selectors.component';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';

export function debug(reduce: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('State', state);
    console.log('action', action);

    return reduce(state, action);
    
  }
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    BooksComponent,
    BookCollectionComponent,
    ActionsComponent,
    SelectorsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collections: collectionReducer,
      game: fromScoreboard.reducer
    }, {
      metaReducers: metaReducers
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
