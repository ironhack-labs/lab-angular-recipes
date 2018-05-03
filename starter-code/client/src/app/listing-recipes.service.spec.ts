/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListingRecipesService } from './listing-recipes.service';

describe('Service: ListingRecipes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListingRecipesService]
    });
  });

  it('should ...', inject([ListingRecipesService], (service: ListingRecipesService) => {
    expect(service).toBeTruthy();
  }));
});
