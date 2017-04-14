export class Book {
  id: number;
title: string = '';
author: string = '';
ISBN: number = Math.floor(1000000000 + Math.random() * 9000000000);
quantity: number = 0;
published: string = '';
category: string = '';
issued: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

