import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitterEvent = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.bookEmitterEvent.emit(this.book);
  }
}
