/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IngredientsServiceService } from './ingredients-service.service';

describe('Service: IngredientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredientsServiceService]
    });
  });

  it('should ...', inject([IngredientsServiceService], (service: IngredientsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
