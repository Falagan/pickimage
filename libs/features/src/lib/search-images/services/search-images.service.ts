import { inject, Injectable } from '@angular/core';
import { IMAGE_REPOSITORY, ImageList, ImageSearch } from '@pickimage/domain';
import { BehaviorSubject, lastValueFrom, map, Observable } from 'rxjs';

@Injectable()
export class SearchImagesService {
  private repository = inject(IMAGE_REPOSITORY);
  private criteria: ImageSearch = { page: 1, itemsPerPage: 10 };
  private initImages: ImageList = { total: 0, items: [] };
  private images = new BehaviorSubject<ImageList>(this.initImages);

  public async searchImages(text: string) {
    this.setCriteria({ page: 1, text });
    this.setToLocalStorage(text);

    const images = await lastValueFrom(
      this.repository.getImages(this.getCriteria())
    );
    this.setImages(images);
  }

  public async loadMoreImages() {
    const { page: currentPage } = this.getCriteria();
    this.setCriteria({ page: currentPage + 1 });

    const images = await lastValueFrom(
      this.repository.getImages(this.getCriteria())
    );
    this.pushImages(images);
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

  private setToLocalStorage(text: string) {
    localStorage.setItem('search', text);
  }

  public getFromLocalStorage(): string | null {
    return localStorage.getItem('search');
  }

  private pushImages(images: ImageList) {
    const { items, total } = this.images.getValue();
    this.images.next({
      items: [...items, ...images.items],
      total: total + images.total,
    });
  }
}
