import { TestBed } from '@angular/core/testing';

import { RoliblesLibService } from './rolibles-lib.service';

describe('RoliblesLibService', () => {
  let service: RoliblesLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoliblesLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
