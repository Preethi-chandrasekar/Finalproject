import { TestBed } from '@angular/core/testing';

import { TrainerblockserviceService } from './trainerblockservice.service';

describe('TrainerblockserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerblockserviceService = TestBed.get(TrainerblockserviceService);
    expect(service).toBeTruthy();
  });
});
