import { TestBed } from '@angular/core/testing';

import { AlineService } from './aline.service';

describe('AlineService', () => {
  let service: AlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
