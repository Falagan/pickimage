import { Injectable } from '@angular/core';
import { UnsplashImageDto } from './dtos/unsplash-image.dto';
import { IImageRepository, Image } from '@pickimage/domain';
import { ImageMapper } from './mappers/image.mapper';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashRepository implements IImageRepository {
  getImages(): Observable<Image[]> {
    const unsplashImages: UnsplashImageDto[] = [
      { description: 'image 1' },
      { description: 'image 2' },
    ];
    return of(unsplashImages.map((image) => ImageMapper.mapDtoToDomain(image)));
  }
}
