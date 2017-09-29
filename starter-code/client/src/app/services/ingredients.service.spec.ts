import { TestBed, inject } from '@angular/core/testing';

import { IngredientsServiceService } from './ingredients-service.service';

describe('IngredientsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsServiceService]
    });
  });

  it('should be created', inject([IngredientsServiceService], (service: IngredientsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
