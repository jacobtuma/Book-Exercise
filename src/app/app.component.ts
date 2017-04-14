import { Component } from '@angular/core';
import {Book} from './book';
import {Transaction} from './transaction';
import { BookDataService } from './book-data.service';
import { TransactionDataService } from './transaction-data.service';

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
  today: Date = new Date();

  constructor(private bookDataService: BookDataService) {
  }

  highlightedDiv: number;

  toggleHighlight(newValue: number) {
    if (this.highlightedDiv === newValue) {
      this.highlightedDiv = 0;
    }
    else {
      this.highlightedDiv = newValue;
    }
    if (newValue == this.myValue) {
      this.myValue = null;
      return;
    }
    this.myValue = newValue;
  }

  clicked(event, val) {


  }

  getValue(val) {
    return this.myValue
  }
  addBook() {
    console.log(this.newBook);
    this.bookDataService.addBook(this.newBook);
    this.newBook = new Book();
  }

  editEntry(val) {
    console.log(this);
    console.log(val +"val");
    if (val == null) {return}
    this.bookDataService.updateBookById(this.myValue, { quantity: val})
  }

  issueBook(book) {
  if (book == null) {return}
  else if (book.quantity <= 0) {return}
else {book.issued++;
    book.quantity--;}
    // this.bookDataService.addBook(this.newBook);
    // this.newBook = new Book();

}

returnBook(book){
  if (book == null) {return}
  else if (book.issued <= 0) {return}
  else {book.quantity++;
    book.issued--;}
}

  removeBook(book) {
    this.bookDataService.deleteBookById(this.myValue);
    this.myValue = null;
  }

  get books() {
    return this.bookDataService.getAllBooks();
  }


}
