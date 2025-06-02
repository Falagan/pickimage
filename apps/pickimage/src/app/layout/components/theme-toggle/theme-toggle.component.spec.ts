import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleComponent } from './theme-toggle.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { THEME } from '../../models/theme';

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent;
  let fixture: ComponentFixture<ThemeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ThemeToggleComponent,
        MatButtonModule,
        MatIconModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggleComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with LIGHT theme', () => {
    expect(component.theme()).toBe(THEME.LIGHT);
  });

  it('should toggle to DARK and emit change event', () => {
    // Arrange
    jest.spyOn(component.toggleTheme, 'emit');
    // Act
    component.onToggleTheme();
    // Assert
    expect(component.theme()).toBe(THEME.DARK);
    expect(component.toggleTheme.emit).toHaveBeenCalledWith(THEME.DARK);
  });

  it('should toggle back to LIGHT and emit change event', () => {
    // Arrange
    jest.spyOn(component.toggleTheme, 'emit');
    component.onToggleTheme();
    // Act
    component.onToggleTheme();
    // Assert
    expect(component.theme()).toBe(THEME.LIGHT);
    expect(component.toggleTheme.emit).toHaveBeenCalledWith(THEME.LIGHT);
  });

  it('should emit change event on toggle', () => {
    // Arrange
    jest.spyOn(component.toggleTheme, 'emit');
    // Act
    component.onToggleTheme();
    // Assert
    expect(component.toggleTheme.emit).toHaveBeenCalledTimes(1);
    expect(component.toggleTheme.emit).toHaveBeenCalledWith(THEME.DARK);
  });
});
