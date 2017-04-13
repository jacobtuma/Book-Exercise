export class Book {
  id: number;
title: string = '';
author: string = '';
ISBN: number;
quantity: number;
published: string = '';
category: string = '';
issued: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

