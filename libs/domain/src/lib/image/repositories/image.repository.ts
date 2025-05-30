import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { InjectionToken } from '@angular/core';

export const IMAGE_REPOSITORY = new InjectionToken<IImageRepository>('ImageRepository');

export interface IImageRepository {
  getImages(): Observable<Image[]>;
}
