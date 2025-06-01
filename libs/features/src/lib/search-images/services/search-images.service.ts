import { inject, Injectable } from '@angular/core';
import { IMAGE_REPOSITORY, ImageList, ImageSearch } from '@pickimage/domain';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable()
export class SearchImagesService {
  private readonly imageRepository = inject(IMAGE_REPOSITORY);
  private readonly imagesSubject = new BehaviorSubject<ImageList>({
    total: 0,
    items: [],
  });
  public readonly images$: Observable<ImageList> =
    this.imagesSubject.asObservable();

  public searchImages(params: ImageSearch): void {
    this.imageRepository
      .getImages(params)
      .pipe(map((images) => this.imagesSubject.next(images)))
      .subscribe();
  }
}
