import { TestBed } from '@angular/core/testing';
import { SearchImagesService } from './search-images.service';

describe('ImagesService', () => {
  let service: SearchImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
