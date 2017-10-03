import { TestBed, inject } from '@angular/core/testing';

import { DishRetrieveService } from './dish-retrieve.service';

describe('DishRetrieveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishRetrieveService]
    });
  });

  it('should be created', inject([DishRetrieveService], (service: DishRetrieveService) => {
    expect(service).toBeTruthy();
  }));
});
