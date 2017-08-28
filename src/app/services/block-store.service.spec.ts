import { TestBed, inject } from '@angular/core/testing';

import { BlockStoreService } from './block-store.service';

describe('BlockStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockStoreService]
    });
  });

  it('should be created', inject([BlockStoreService], (service: BlockStoreService) => {
    expect(service).toBeTruthy();
  }));
});
