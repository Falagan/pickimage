import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'feature-image-tags',
  imports: [MatChipsModule],
  templateUrl: './image-tags.component.html',
  styleUrl: './image-tags.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageTagsComponent {
  @Input() tags: string[] = [''];

}
