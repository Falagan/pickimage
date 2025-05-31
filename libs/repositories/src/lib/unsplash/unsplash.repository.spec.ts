import { TestBed } from '@angular/core/testing';

import { UnsplashRepository } from './unsplash.repository';

describe('UnsplashRepository', () => {
  let service: UnsplashRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
