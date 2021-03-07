import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../ngrx/model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() books: Book[];
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
