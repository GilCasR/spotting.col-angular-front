import { TestBed } from '@angular/core/testing';

import { AircraftTypesService } from './aircraft-types.service';

describe('AircraftTypesService', () => {
  let service: AircraftTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AircraftTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
