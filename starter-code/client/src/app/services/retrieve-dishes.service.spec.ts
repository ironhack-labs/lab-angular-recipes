import { TestBed, inject } from '@angular/core/testing';

import { RetrieveDishesService } from './retrieve-dishes.service';

describe('RetrieveDishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveDishesService]
    });
  });

  it('should be created', inject([RetrieveDishesService], (service: RetrieveDishesService) => {
    expect(service).toBeTruthy();
  }));
});
