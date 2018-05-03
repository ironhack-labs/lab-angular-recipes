/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllDishesService } from './AllDishes.service';

describe('Service: AllDishes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllDishesService]
    });
  });

  it('should ...', inject([AllDishesService], (service: AllDishesService) => {
    expect(service).toBeTruthy();
  }));
});
