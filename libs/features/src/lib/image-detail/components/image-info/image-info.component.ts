import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'feature-image-info',
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './image-info.component.html',
  styleUrl: './image-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageInfoComponent {
  @Input() username = "";
  @Input() likes = 0;
}
