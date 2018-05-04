/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DishesServicesService } from './dishesServices.service';

describe('Service: DishesServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesServicesService]
    });
  });

  it('should ...', inject([DishesServicesService], (service: DishesServicesService) => {
    expect(service).toBeTruthy();
  }));
});
