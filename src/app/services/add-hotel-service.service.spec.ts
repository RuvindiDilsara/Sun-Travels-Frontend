import { TestBed } from '@angular/core/testing';

import { AddHotelServiceService } from './add-hotel-service.service';

describe('AddHotelServiceService', () => {
  let service: AddHotelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHotelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
