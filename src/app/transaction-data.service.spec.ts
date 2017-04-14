/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransactionDataService } from './transaction-data.service';

describe('TransactionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionDataService]
    });
  });

  it('should ...', inject([TransactionDataService], (service: TransactionDataService) => {
    expect(service).toBeTruthy();
  }));
});
