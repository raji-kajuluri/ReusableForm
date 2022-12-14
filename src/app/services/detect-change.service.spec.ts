import { TestBed } from '@angular/core/testing';

import { DetectChangeService } from './detect-change.service';

describe('DetectChangeService', () => {
  let service: DetectChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
