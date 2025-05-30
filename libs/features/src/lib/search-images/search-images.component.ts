import { Component, inject, OnInit } from '@angular/core';
import { ImagesService } from './services/images.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'lib-search-images',
  templateUrl: './search-images.component.html',
  styleUrl: './search-images.component.css',
  imports: [AsyncPipe, NgFor, NgIf],
  providers: [ImagesService],
  standalone: true,
})
export class SearchImagesComponent implements OnInit {
  private readonly imagesService = inject(ImagesService);
  public images$ = this.imagesService.images$;

  ngOnInit(): void {
    this.imagesService.getImages();
  }
}
