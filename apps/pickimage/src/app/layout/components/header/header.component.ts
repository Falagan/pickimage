import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { THEME } from '../../models/theme';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, ThemeToggleComponent],
  providers: [LayoutService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly layoutService = inject(LayoutService);

  public onToggleTheme(theme: THEME) {
    this.layoutService.setTheme(theme);
  }
}
