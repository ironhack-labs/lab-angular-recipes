import { TestBed, inject } from '@angular/core/testing';

import { RetrieveIngredientsService } from './retrieve-ingredients.service';

describe('RetrieveIngredientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveIngredientsService]
    });
  });

  it('should be created', inject([RetrieveIngredientsService], (service: RetrieveIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
