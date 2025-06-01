import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageDetailService } from './services/image-detail.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'feature-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrl: './image-detail.component.scss',
  imports: [NgIf, AsyncPipe],
  providers: [ImageDetailService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageDetailComponent implements OnInit {
  private readonly routeService = inject(ActivatedRoute);
  private readonly imageDetailService = inject(ImageDetailService);
  public readonly image$ = this.imageDetailService.image$;

  ngOnInit(): void {
    const id = this.getImageId();
    this.imageDetailService.getImage(id);
  }

  private getImageId() {
    return this.routeService.snapshot.params['id'];
  }
}
