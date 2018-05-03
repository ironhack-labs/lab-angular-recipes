import { TestBed, inject } from '@angular/core/testing';

import { MyIngredientsService } from './my-ingredients.service';

describe('MyIngredientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyIngredientsService]
    });
  });

  it('should be created', inject([MyIngredientsService], (service: MyIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
