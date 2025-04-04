import { TestBed } from '@angular/core/testing';

import { InMemoryDBService } from './in-memory-db.service';

describe('InMemoryDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDBService = TestBed.get(InMemoryDBService);
    expect(service).toBeTruthy();
  });
});
