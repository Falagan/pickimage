import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Image } from '@pickimage/domain';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'feature-image-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageCardComponent {
  @Input() image!: Image;
}
