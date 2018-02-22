import { TestBed, inject } from '@angular/core/testing';

import { DataIngService } from './data-ing.service';

describe('DataIngService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataIngService]
    });
  });

  it('should be created', inject([DataIngService], (service: DataIngService) => {
    expect(service).toBeTruthy();
  }));
});
