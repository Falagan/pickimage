import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashImage } from './dtos/unsplash-image.dto';
import { IImageRepository, ImageList, ImageSearch } from '@pickimage/domain';
import { map, Observable } from 'rxjs';
import { ImageSearchMapper } from './mappers/image-search.mapper';
import { UnsplashApiResponsePaginated } from './models/unsplash-api-response.model';
import { UNSPLASH_API } from './config/unsplash-api.config';
import { ImageListMapper } from './mappers/image-list.mapper';
import { UnsplashSearchParams } from './dtos/unsplassearh-params.dto';

@Injectable({
  providedIn: 'root',
})
export class UnsplashRepository implements IImageRepository {
  private readonly httpClient = inject(HttpClient);

  public getImages(params: ImageSearch): Observable<ImageList> {
    const mappedParams = ImageSearchMapper.mapDomainToDto(params);
    const url = this.buildURL(mappedParams);

    return this.httpClient
      .get<UnsplashApiResponsePaginated<UnsplashImage>>(url)
      .pipe(map((response) => ImageListMapper.mapDtoToDomain(response)));
  }

  private buildURL(params: UnsplashSearchParams) {
    return `${UNSPLASH_API.BASE_URL}/${UNSPLASH_API.ROUTES.SEARCH_PHOTOS}/?client_id=${UNSPLASH_API.API_KEY}&query=${params.text}&order_by=${params.order_by}&per_page=${params.per_page}&page=${params.page}`;
  }
}
