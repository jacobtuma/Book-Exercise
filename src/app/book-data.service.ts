import { Injectable } from '@angular/core';
import {Book} from './book';

@Injectable()
export class BookDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for book's
  books: Book[] = [
    {
    ISBN: 2230,
  author: 'Jacob Tuma',
  category: 'Mystery',
  id: 1,
  issued: 0,
  published: '9/26/97',
  quantity: 2,
  title: 'A Ripple In Time'
  },
    {
      ISBN: 2230,
      author: 'Jacob 2ma',
      category: 'Mystery',
      id: 2,
      issued: 0,
      published: '9/26/97',
      quantity: 2,
      title: 'A Ripple In Time'
    }];

  constructor() {
  }

  // Simulate POST /books
  addBook(book: Book): BookDataService {
    if (!book.id) {
      book.id = ++this.lastId;
    }
    this.books.push(book);
    console.log(this.books)
    return this;
  }

  // Simulate DELETE /books/:id
  deleteBookById(id: number): BookDataService {
    this.books = this.books
      .filter(book => book.id !== id);
    return this;
  }

  // Simulate PUT /books/:id
  updateBookById(id: number, values: Object = {}): Book {
    let book = this.getBookById(id);
    if (!book) {
      return null;
    }
    Object.assign(book, values);
    return book;
  }

  // Simulate GET /books
  getAllBooks(): Book[] {
    return this.books;
  }

  // Simulate GET /books/:id
  getBookById(id: number): Book {
    return this.books
      .filter(book => book.id === id)
      .pop();
  }



}
