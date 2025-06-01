import { InputSearchComponent } from '@pickimage/shared';
import { ImageGalleryComponent } from '@pickimage/shared';
import { Component, inject } from '@angular/core';
import { SearchImagesService } from './services/search-images.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { Image } from '@pickimage/domain';
import { Router } from '@angular/router';
@Component({
  selector: 'feature-search-images',
  templateUrl: './search-images.component.html',
  styleUrl: './search-images.component.scss',
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    ImageCardComponent,
    ImageGalleryComponent,
    InputSearchComponent,
  ],
  providers: [SearchImagesService],
  standalone: true,
})
export class SearchImagesComponent {
  private readonly routerService = inject(Router);
  private readonly imagesService = inject(SearchImagesService);
  public images$ = this.imagesService.images$;

  onSearch(text: string) {
    this.imagesService.searchImages({ page: 1, itemsPerPage: 10, text });
  }

  onNavigateToImageDetail(image: Image) {
    this.routerService.navigate(['image', image.id]);
  }
}
