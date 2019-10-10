import { TestBed } from '@angular/core/testing';

import { BlockserviceService } from './blockservice.service';

describe('BlockserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockserviceService = TestBed.get(BlockserviceService);
    expect(service).toBeTruthy();
  });
});
