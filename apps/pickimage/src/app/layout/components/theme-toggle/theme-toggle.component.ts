import {
  Component,
  Output,
  signal,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { THEME } from '../../models/theme';

@Component({
  selector: 'app-theme-toggle',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  @Output() toggleTheme = new EventEmitter<THEME>();
  theme = signal<THEME>(THEME.LIGHT);

  onToggleTheme() {
    this.theme.update(this.nextTheme);
    this.toggleTheme.emit(this.theme());
  }

  private nextTheme = () =>
    this.theme() === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
}
