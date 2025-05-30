import { inject, Injectable } from '@angular/core';
import { Image, IMAGE_REPOSITORY } from '@pickimage/domain';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable()
export class ImagesService {
  private readonly imageRepository = inject(IMAGE_REPOSITORY);
  private readonly imagesSubject = new BehaviorSubject<Image[]>([]);
  public readonly images$: Observable<Image[]> =
    this.imagesSubject.asObservable();

  getImages(): void {
    this.imageRepository
      .getImages()
      .pipe(map((images) => this.imagesSubject.next(images)))
      .subscribe();
  }
}
