import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { ImageList } from '../models/image-list.model';
import { Image } from '../models/image.model';
import { ImageSearch } from '../models/image-search.model';

export const IMAGE_REPOSITORY = new InjectionToken<IImageRepository>('ImageRepository');

export interface IImageRepository {
  getImages(params: ImageSearch): Observable<ImageList>;
  getImage(id:string): Observable<Image>
}
