import { TestBed, inject } from '@angular/core/testing';

import { IngredientlistService } from './ingredientlist.service';

describe('IngredientlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientlistService]
    });
  });

  it('should be created', inject([IngredientlistService], (service: IngredientlistService) => {
    expect(service).toBeTruthy();
  }));
});
