import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable()
export class TransactionDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for transaction's
  transactions: Transaction[] = [];


  constructor() {
  }

  // Simulate POST /transactions
  addTransaction(transaction: Transaction): TransactionDataService {
    if (!transaction.id) {
      transaction.id = ++this.lastId;
    }
    this.transactions.push(transaction);
    return this;
  }

  // Simulate DELETE /transactions/:id
  deleteTransactionById(id: number): TransactionDataService {
    this.transactions = this.transactions
      .filter(transaction => transaction.id !== id);
    return this;
  }




  updateTransactionById(id: number, values: Object = {}): Transaction {
    let transaction = this.getTransactionById(id);
    if (!transaction) {
      return null;
    }
    Object.assign(transaction, values);
    return transaction;
  }

  // Simulate GET /transactions
  getAllTransactions(): Transaction[] {
    return this.transactions;
  }

  // Simulate GET /transactions/:id
  getTransactionById(id: number): Transaction {
    return this.transactions
      .filter(transaction => transaction.id === id)
      .pop();
  }



}
