import { TestBed, inject } from '@angular/core/testing';

import { IngredientsShowService } from './ingredients-show.service';

describe('IngredientsShowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsShowService]
    });
  });

  it('should be created', inject([IngredientsShowService], (service: IngredientsShowService) => {
    expect(service).toBeTruthy();
  }));
});
