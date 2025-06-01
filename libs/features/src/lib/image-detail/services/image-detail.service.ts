import { inject, Injectable } from '@angular/core';
import { IMAGE_REPOSITORY } from '@pickimage/domain';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Image } from '@pickimage/domain';

@Injectable({
  providedIn: 'root',
})
export class ImageDetailService {
  private readonly imageRepository = inject(IMAGE_REPOSITORY);
  private readonly imageSubject = new BehaviorSubject<Image | null>(null);
  public readonly image$: Observable<Image | null> =
    this.imageSubject.asObservable();

  public getImage(id: string): void {
    this.imageRepository
      .getImage(id)
      .pipe(map((image) => this.imageSubject.next(image)))
      .subscribe();
  }
}
