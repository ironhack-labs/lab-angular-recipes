import { TestBed, inject } from '@angular/core/testing';

import { DishApiService } from './dish-api.service';

describe('DishApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishApiService]
    });
  });

  it('should be created', inject([DishApiService], (service: DishApiService) => {
    expect(service).toBeTruthy();
  }));
});
