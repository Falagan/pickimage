import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NoDataComponent } from '@pickimage/shared';

@Component({
  selector: 'feature-image-content',
  imports: [NoDataComponent],
  templateUrl: './image-content.component.html',
  styleUrl: './image-content.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageContentComponent {
  @Input() url!: string;
}
