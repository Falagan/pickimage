import { InputSearchComponent } from '@pickimage/shared';
import { ImageGalleryComponent } from '@pickimage/shared';
import { Component, inject } from '@angular/core';
import { ImagesService } from './services/images.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';

@Component({
  selector: 'feature-search-images',
  templateUrl: './search-images.component.html',
  styleUrl: './search-images.component.css',
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    ImageCardComponent,
    ImageGalleryComponent,
    InputSearchComponent,
  ],
  providers: [ImagesService],
  standalone: true,
})
export class SearchImagesComponent {
  private readonly imagesService = inject(ImagesService);
  public images$ = this.imagesService.images$;

  onSearch(text: string) {
    this.imagesService.searchImages({ page: 1, itemsPerPage: 10, text });
  }
}
