import { UnsplashApiResponsePaginated } from '../models/unsplash-api-response.model';
import { UnsplashImage } from '../dtos/unsplash-image.dto';
import { UnsplashImageBuilder } from './unsplash-api-response-results-mock.builder';

export class UnsplashApiResponseBuilder {
  private total = 5000;
  private totalPages = 1000;
  private results: UnsplashImage[] = new UnsplashImageBuilder().buildMany(2);

  withTotal(total: number): this {
    this.total = total;
    return this;
  }

  withTotalPages(totalPages: number): this {
    this.totalPages = totalPages;
    return this;
  }

  withResults(results: UnsplashImage[]): this {
    this.results = results;
    return this;
  }

  addImage(image: Partial<UnsplashImage>): this {
    this.results.push(image as UnsplashImage);
    return this;
  }

  build(): UnsplashApiResponsePaginated<UnsplashImage> {
    return {
      total: this.total,
      total_pages: this.totalPages,
      results: this.results,
    };
  }
}
