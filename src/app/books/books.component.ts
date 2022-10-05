import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700,
    },
    {
      name: 'Pragmatic Programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/41HXiIojloL.jpg',
      amount: 800,
    },
    {
      name: 'Introduction To Algorithms',
      author: 'Thomas H. Cormen',
      image:
        'https://m.media-amazon.com/images/I/513P8XoCAEL._SX376_BO1,204,203,200_.jpg',
      amount: 999,
    },
    {
      name: 'Art of Computer Programming',
      author: 'Donald E. Knuth',
      image:
        'https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/18f9d9f15_160029.jpg',
      amount: 999,
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleBook() {
    this.isShowing = !this.isShowing;
  }
}
