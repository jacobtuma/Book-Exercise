import { Component } from '@angular/core';
import {Book} from './book';
import { BookDataService } from './book-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookDataService]
})
export class AppComponent {
  isClassVisible: false;
  newBook: Book = new Book();
  private myValue;
  constructor(private bookDataService: BookDataService) {
  }
  setValue(val) {
    if (val == this.myValue) {
      this.myValue = null;
      return;
    }
    this.myValue = val;
  }

  getValue(val) {
    return this.myValue
  }
  addBook() {
    this.bookDataService.addBook(this.newBook);
    this.newBook = new Book();
  }

  editEntry(val) {
    console.log(this);
    console.log(val +"val");
    if (val == null) {return}
    this.bookDataService.updateBookById(this.myValue, { quantity: val})
  }

  removeBook(book) {
    this.bookDataService.deleteBookById(this.myValue);
  }

  get books() {
    return this.bookDataService.getAllBooks();
  }


}
