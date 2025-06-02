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
  private searchParams: ImageSearch = { page: 1, itemsPerPage: 10 };

  public searchImages(text: string): void {
    this.saveLastSearch(text);
    this.setSearchParams({ page: 1, text });

    this.imageRepository
      .getImages(this.getSearchParams())
      .pipe(
        map((images) => {
          this.setImages(images);
        })
      )
      .subscribe();
  }

  public loadMoreImages(): void {
    const { page: currentPage } = this.getSearchParams();
    this.setSearchParams({ page: currentPage + 1 });

    this.imageRepository
      .getImages(this.getSearchParams())
      .pipe(
        map((images) => {
          this.pushImages(images);
        })
      )
      .subscribe();
  }

  public clearImages(): void {
    this.imagesSubject.next({ total: 0, items: [] });
  }

  public loadLastSearch() {
    const lastSearch = this.getLastSearch();
    if (lastSearch) {
      this.searchImages(lastSearch);
    }
  }

  public getImages(): Observable<ImageList> {
    return this.imagesSubject.asObservable();
  }

  public setImages(newList: ImageList) {
    this.imagesSubject.next(newList);
  }

  public getSearchParams(): ImageSearch {
    return this.searchParams;
  }

  public setSearchParams(params: Partial<ImageSearch>) {
    this.searchParams = {
      ...this.searchParams,
      ...params,
    };
  }

  private saveLastSearch(text: string) {
    localStorage.setItem('search', text);
  }

  private getLastSearch(): string | null {
    return localStorage.getItem('search');
  }

  private pushImages(images: ImageList) {
    const { items, total } = this.imagesSubject.getValue();
    this.imagesSubject.next({
      items: [...items, ...images.items],
      total: total + images.total,
    });
  }
}
