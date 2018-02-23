import { TestBed, inject } from '@angular/core/testing';

import { ListDishesService } from './list-dishes.service';

describe('ListDishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDishesService]
    });
  });

  it('should be created', inject([ListDishesService], (service: ListDishesService) => {
    expect(service).toBeTruthy();
  }));
});
