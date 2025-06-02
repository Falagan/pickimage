import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ImageGalleryComponent } from '@pickimage/shared';
import { ImageCardComponent } from '../image-card/image-card.component';
import { Image } from '@pickimage/domain';

@Component({
  selector: 'feature-search-results',
  imports: [ImageCardComponent, ImageGalleryComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input() images: Image[] = [];
  @Output() imageClick = new EventEmitter<Image>();

  public onClickImage(image: Image) {
    this.imageClick.emit(image);
  }
}
