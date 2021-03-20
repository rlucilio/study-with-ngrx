import { collectionReducer } from './states/ngrx/collections.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/app/basic/ngrx/counter.reducers';
import { ComponentTestComponent } from './basic/component-test.component';
import { booksReducer } from './states/ngrx/books.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './states/books/books.component';
import { BookCollectionComponent } from './states/book-collection/book-collection.component';
import { ActionsComponent } from './actions/actions/actions.component';
import * as fromScoreboard from './reducers/scoreboard.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTestComponent,
    BooksComponent,
    BookCollectionComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collections: collectionReducer,
      game: fromScoreboard.reducer
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
