/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetrieveService } from './retrieve.service';

describe('Service: Retrieve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveService]
    });
  });

  it('should ...', inject([RetrieveService], (service: RetrieveService) => {
    expect(service).toBeTruthy();
  }));
});
