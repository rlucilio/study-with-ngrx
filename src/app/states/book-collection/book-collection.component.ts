import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../ngrx/model/book';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {
  @Input() books: Array<Book>;
  @Output() remove = new EventEmitter();
}
