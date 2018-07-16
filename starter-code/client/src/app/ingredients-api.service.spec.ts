import { TestBed, inject } from '@angular/core/testing';

import { IngredientsApiService } from './ingredients-api.service';

describe('IngredientsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsApiService]
    });
  });

  it('should be created', inject([IngredientsApiService], (service: IngredientsApiService) => {
    expect(service).toBeTruthy();
  }));
});
