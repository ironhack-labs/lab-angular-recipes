/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetrieveDishService } from './retrieve-dish.service';

describe('Service: RetrieveDish', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveDishService]
    });
  });

  it('should ...', inject([RetrieveDishService], (service: RetrieveDishService) => {
    expect(service).toBeTruthy();
  }));
});
