import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashImage } from './dtos/unsplash-image.dto';
import {
  IImageRepository,
  ImageList,
  ImageSearch,
  Image,
} from '@pickimage/domain';
import { map, Observable } from 'rxjs';
import { ImageSearchMapper } from './mappers/image-search.mapper';
import { UnsplashApiResponsePaginated } from './models/unsplash-api-response.model';
import { ImageListMapper } from './mappers/image-list.mapper';
import { ImageMapper } from './mappers/image.mapper';
import { UnsplashApiUrlBuilder } from './utils/unsplash-api-urls.builder';

@Injectable({
  providedIn: 'root',
})
export class UnsplashRepository implements IImageRepository {
  private readonly httpClient = inject(HttpClient);

  public getImages(params: ImageSearch): Observable<ImageList> {
    const mappedParams = ImageSearchMapper.mapDomainToDto(params);
    const url = UnsplashApiUrlBuilder.buildGetImagesURL(mappedParams);

    return this.httpClient
      .get<UnsplashApiResponsePaginated<UnsplashImage>>(url)
      .pipe(map((response) => ImageListMapper.mapDtoToDomain(response)));
  }

  public getImage(id: string): Observable<Image> {
    const url = UnsplashApiUrlBuilder.buildGetImageURL(id);

    return this.httpClient
      .get<UnsplashImage>(url)
      .pipe(map((response) => ImageMapper.mapDtoToDomain(response)));
  }
}
