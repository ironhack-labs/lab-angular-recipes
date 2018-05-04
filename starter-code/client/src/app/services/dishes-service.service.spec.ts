/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DishesServiceService } from './dishes-service.service';

describe('Service: DishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesServiceService]
    });
  });

  it('should ...', inject([DishesServiceService], (service: DishesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
