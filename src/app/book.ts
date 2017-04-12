export class Book {
title: string = '';
author: string = '';
ISBN: string = '';
quantity: string = '';
published: string = '';
category: string = '';
issued: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

