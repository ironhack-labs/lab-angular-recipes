import { TestBed, inject } from '@angular/core/testing';

import { ListIngredientsService } from './list-ingredients.service';

describe('ListIngredientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListIngredientsService]
    });
  });

  it('should be created', inject([ListIngredientsService], (service: ListIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
