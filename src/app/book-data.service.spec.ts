/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {Book} from './book';
import {BookDataService} from './book-data.service';

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDataService]
    });
  });

  it('should ...', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllBooks()', () => {

    it('should return an empty array by default', inject([BookDataService], (service: BookDataService) => {
      expect(service.getAllBooks()).toEqual([]);
    }));

    it('should return all books', inject([BookDataService], (service: BookDataService) => {
      let book1 = new Book({title: 'Hello 1'});
      let book2 = new Book({title: 'Hello 2'});
      service.addBook(book1);
      service.addBook(book2);
      expect(service.getAllBooks()).toEqual([book1, book2]);
    }));

  });

  describe('#save(book)', () => {

    it('should automatically assign an incrementing id', inject([BookDataService], (service: BookDataService) => {
      let book1 = new Book({title: 'Hello 1'});
      let book2 = new Book({title: 'Hello 2'});
      service.addBook(book1);
      service.addBook(book2);
      expect(service.getBookById(1)).toEqual(book1);
      expect(service.getBookById(2)).toEqual(book2);
    }));

  });

  describe('#deleteBookById(id)', () => {

    it('should remove book with the corresponding id', inject([BookDataService], (service: BookDataService) => {
      let book1 = new Book({title: 'Hello 1'});
      let book2 = new Book({title: 'Hello 2'});
      service.addBook(book1);
      service.addBook(book2);
      expect(service.getAllBooks()).toEqual([book1, book2]);
      service.deleteBookById(1);
      expect(service.getAllBooks()).toEqual([book2]);
      service.deleteBookById(2);
      expect(service.getAllBooks()).toEqual([]);
    }));

    it('should not removing anything if book with corresponding id is not found', inject([BookDataService], (service: BookDataService) => {
      let book1 = new Book({title: 'Hello 1'});
      let book2 = new Book({title: 'Hello 2'});
      service.addBook(book1);
      service.addBook(book2);
      expect(service.getAllBooks()).toEqual([book1, book2]);
      service.deleteBookById(3);
      expect(service.getAllBooks()).toEqual([book1, book2]);
    }));

  });

  describe('#updateBookById(id, values)', () => {

    it('should return book with the corresponding id and updated data', inject([BookDataService], (service: BookDataService) => {
      let book = new Book({title: 'Hello 1'});
      service.addBook(book);
      let updatedBook = service.updateBookById(1, {
        title: 'new title'
      });
      expect(updatedBook.title).toEqual('new title');
    }));

    it('should return null if book is not found', inject([BookDataService], (service: BookDataService) => {
      let book = new Book({title: 'Hello 1'});
      service.addBook(book);
      let updatedBook = service.updateBookById(2, {
        title: 'new title'
      });
      expect(updatedBook).toEqual(null);
    }));

  });


});
