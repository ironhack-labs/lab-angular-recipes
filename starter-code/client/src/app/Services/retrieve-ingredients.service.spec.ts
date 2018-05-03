/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetrieveIngredientsService } from './retrieve-ingredients.service';

describe('Service: RetrieveIngredients', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveIngredientsService]
    });
  });

  it('should ...', inject([RetrieveIngredientsService], (service: RetrieveIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
