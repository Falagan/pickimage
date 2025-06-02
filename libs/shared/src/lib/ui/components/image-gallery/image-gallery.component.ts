import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGalleryComponent {}
