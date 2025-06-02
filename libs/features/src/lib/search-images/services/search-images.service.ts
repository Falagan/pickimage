import { inject, Injectable } from '@angular/core';
import { IMAGE_REPOSITORY, ImageList, ImageSearch } from '@pickimage/domain';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable()
export class SearchImagesService {
  private repository = inject(IMAGE_REPOSITORY);
  private criteria: ImageSearch = { page: 1, itemsPerPage: 10 };
  private initImages: ImageList = { total: 0, items: [] };
  private images = new BehaviorSubject<ImageList>(this.initImages);

  public searchImages(text: string): void {
    this.setCriteria({ page: 1, text });
    this.setToLocalStorage(this.getCriteria())

    this.repository
      .getImages(this.getCriteria())
      .pipe(
        map((images) => {
          this.setImages(images);
        })
      )
      .subscribe();
  }

  public loadMoreImages(): void {
    const { page: currentPage } = this.getCriteria();
    this.setCriteria({ page: currentPage + 1 });

    this.repository
      .getImages(this.getCriteria())
      .pipe(
        map((images) => {
          this.pushImages(images);
        })
      )
      .subscribe();
  }

  public resetImages(): void {
    this.images.next(this.initImages);
  }

  public loadLastSearch() {
    const lastSearch = this.getFromLocalStorage();
    if (lastSearch) {
      this.searchImages(lastSearch);
    }
  }

  public getImages(): Observable<ImageList> {
    return this.images.asObservable();
  }

  public setImages(newList: ImageList) {
    this.images.next(newList);
  }

  public getCriteria(): ImageSearch {
    return this.criteria;
  }

  public setCriteria(params: Partial<ImageSearch>) {
    this.criteria = {
      ...this.criteria,
      ...params,
    };
  }

  private setToLocalStorage(criteria: ImageSearch) {
    localStorage.setItem('search', JSON.stringify(criteria));
  }

  public getFromLocalStorage(): string | null {
    const criteria = localStorage.getItem('search');
    if (criteria) {
      return JSON.parse(criteria);
    }
    return null;
  }

  private pushImages(images: ImageList) {
    const { items, total } = this.images.getValue();
    this.images.next({
      items: [...items, ...images.items],
      total: total + images.total,
    });
  }
}
