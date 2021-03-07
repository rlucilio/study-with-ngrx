import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './states/books.service';
import { booksSelectors, selectorBookCollection } from './states/ngrx/books.selectors';
import { addBook, removeBook, retrievedBookList } from './states/ngrx/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(booksSelectors));
  bookCollection$ = this.store.pipe(select(selectorBookCollection));

  constructor(
    private store: Store,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe({
      next: book => this.store.dispatch(retrievedBookList({ book }))
    });
  }

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }
}
