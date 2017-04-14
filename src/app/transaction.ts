export class Transaction {
  id: number;
  book_id: number;
  book_name: string = '';
  date: string = '';
  type: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

