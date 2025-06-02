import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UnsplashRepository } from './unsplash.repository';
import { UnsplashImageBuilder } from './testing/unsplash-api-response-results-mock.builder';
import { ImageSearch } from '@pickimage/domain';
import { UnsplashApiUrlBuilder } from './utils/unsplash-api-urls.builder';
import { UnsplashApiResponseBuilder } from './testing/unsplash-api-response-mock.builder';

describe('UnsplashRepository', () => {
  let service: UnsplashRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UnsplashRepository],
    });

    service = TestBed.inject(UnsplashRepository);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch a single image', () => {
    // Arrage
    const mockImage = new UnsplashImageBuilder().withId('img-1').build();
    const expectedUrl = UnsplashApiUrlBuilder.buildGetImageURL('img-1');
    // Act
    service.getImage('img-1').subscribe((result) => {
      // Assert
      expect(result.id).toBe('img-1');
      expect(result.description).toBe(mockImage.description);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockImage);
  });

  it('should fetch a list of images with search params', () => {
    // Arrange
    const mockParams: ImageSearch = {
      text: 'nature',
      page: 1,
      itemsPerPage: 10,
    };
    const mockResponse = new UnsplashApiResponseBuilder().build();
    const expectedUrl = UnsplashApiUrlBuilder.buildGetImagesURL({
      text: 'nature',
      page: 1,
      per_page: 10,
    });
    // Act
    service.getImages(mockParams).subscribe((imageList) => {
      // Assert
      expect(imageList.items.length).toBe(mockResponse.results.length);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
