import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'feature-image-go-to-search',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './image-go-to-search.component.html',
  styleUrl: './image-go-to-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageGoToSearchComponent {
  @Output() goToSearch = new EventEmitter<void>();

  onGoToSearch() {
    this.goToSearch.emit();
  }
}
