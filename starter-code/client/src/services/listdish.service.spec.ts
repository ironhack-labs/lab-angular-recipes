import { TestBed, inject } from '@angular/core/testing';

import { ListdishService } from './listdish.service';

describe('ListdishService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListdishService]
    });
  });

  it('should be created', inject([ListdishService], (service: ListdishService) => {
    expect(service).toBeTruthy();
  }));
});
