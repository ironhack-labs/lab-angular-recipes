import { TestBed, inject } from '@angular/core/testing';

import { GetDishesService } from './get-dishes.service';

describe('GetDishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDishesService]
    });
  });

  it('should be created', inject([GetDishesService], (service: GetDishesService) => {
    expect(service).toBeTruthy();
  }));
});
