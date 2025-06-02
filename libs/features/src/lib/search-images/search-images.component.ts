import {
  InputSearchComponent,
  ScrollTrackerDirective,
} from '@pickimage/shared';
import { Component, inject, OnInit } from '@angular/core';
import { SearchImagesService } from './services/search-images.service';
import { AsyncPipe } from '@angular/common';
import { Image } from '@pickimage/domain';
import { Router } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
@Component({
  selector: 'feature-search-images',
  templateUrl: './search-images.component.html',
  styleUrl: './search-images.component.scss',
  imports: [
    AsyncPipe,
    InputSearchComponent,
    SearchResultsComponent,
    ScrollTrackerDirective,
  ],
  providers: [SearchImagesService],
  standalone: true,
})
export class SearchImagesComponent implements OnInit {
  private readonly routerService = inject(Router);
  private readonly imagesService = inject(SearchImagesService);
  public images$ = this.imagesService.getImages();

  ngOnInit() {
    this.imagesService.loadLastSearch();
  }

  onSearch(text: string) {
    this.imagesService.searchImages(text);
  }

  onCleanSearch() {
    this.imagesService.resetImages();
  }

  onScroll() {
    this.imagesService.loadMoreImages();
  }

  onNavigateToImageDetail(image: Image) {
    this.routerService.navigate(['image', image.id]);
  }
}
