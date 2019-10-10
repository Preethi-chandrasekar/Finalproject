import { TestBed } from '@angular/core/testing';

import { UsersignserveService } from './usersignserve.service';

describe('UsersignserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersignserveService = TestBed.get(UsersignserveService);
    expect(service).toBeTruthy();
  });
});
