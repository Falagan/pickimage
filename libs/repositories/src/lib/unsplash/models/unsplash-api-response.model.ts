export interface UnsplashApiResponsePaginated<T> {
  total: number;
  total_pages: number;
  results: T[];
}