import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';
import { THEME } from '../models/theme';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutService],
    });
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add "dark-theme" class when THEME.DARK is set', () => {
    // Arrange/Act
    service.setTheme(THEME.DARK);
    // Assert
    expect(document.body.classList.contains('dark-theme')).toBeTruthy();
  });

  it('should not add "dark-theme" class when THEME.LIGHT is set', () => {
    // Arrange/Act
    service.setTheme(THEME.LIGHT);
    // Assert
    expect(document.body.classList.contains('dark-theme')).toBeFalsy();
  });
});
