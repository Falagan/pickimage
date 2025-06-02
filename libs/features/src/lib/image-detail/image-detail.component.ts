import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageDetailService } from './services/image-detail.service';
import { AsyncPipe } from '@angular/common';
import { ImageInfoComponent } from './components/image-info/image-info.component';
import { ImageTagsComponent } from './components/image-tags/image-tags.component';
import { ImageContentComponent } from './components/image-content/image-content.component';
import { ImageGoToSearchComponent } from "./components/image-go-to-search/image-go-to-search.component";

@Component({
  selector: 'feature-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.scss',
  imports: [
    AsyncPipe,
    ImageInfoComponent,
    ImageTagsComponent,
    ImageContentComponent,
    ImageGoToSearchComponent
],
  providers: [ImageDetailService, ImageInfoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDetailComponent implements OnInit {
  private readonly routeService = inject(ActivatedRoute);
  private readonly routerService = inject(Router);
  private readonly imageDetailService = inject(ImageDetailService);
  public readonly image$ = this.imageDetailService.image$;

  ngOnInit(): void {
    const id = this.getImageId();
    this.imageDetailService.getImage(id);
  }

  public onGoImageSearch() {
    this.routerService.navigate(['/']);
  }

  private getImageId() {
    return this.routeService.snapshot.params['id'];
  }
}
