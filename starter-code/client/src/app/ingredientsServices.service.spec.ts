/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngredientsServicesService } from './ingredientsServices.service';

describe('Service: IngredientsServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsServicesService]
    });
  });

  it('should ...', inject([IngredientsServicesService], (service: IngredientsServicesService) => {
    expect(service).toBeTruthy();
  }));
});
