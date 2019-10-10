import { TestBed } from '@angular/core/testing';

import { TrainersignServeService } from './trainersign-serve.service';

describe('TrainersignServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainersignServeService = TestBed.get(TrainersignServeService);
    expect(service).toBeTruthy();
  });
});
