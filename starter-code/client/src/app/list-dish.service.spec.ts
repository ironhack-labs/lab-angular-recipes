/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListDishService } from './list-dish.service';

describe('Service: ListDish', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDishService]
    });
  });

  it('should ...', inject([ListDishService], (service: ListDishService) => {
    expect(service).toBeTruthy();
  }));
});
