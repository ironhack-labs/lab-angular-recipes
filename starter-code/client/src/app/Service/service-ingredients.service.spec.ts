/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceIngredientsService } from './service-ingredients.service';

describe('Service: ServiceIngredients', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceIngredientsService]
    });
  });

  it('should ...', inject([ServiceIngredientsService], (service: ServiceIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
