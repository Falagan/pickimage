import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'shared-input-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  @Input() placeholder!: string;
  @Input() debounceTime = 0;
  @Output() changeSearch = new EventEmitter<string>();
  @Output() cleanSearch = new EventEmitter<void>();

  private changeSubject = new Subject<string>();
  public value = '';

  ngOnInit(): void {
    this.subscribeToInputChanges();
  }

  public onClearValue() {
    this.value = '';
    this.cleanSearch.emit();
  }

  public onChange(text: string) {
    if (text === '') {
      this.cleanSearch.emit();
    } else {
      this.changeSubject.next(text)
    }
  }
  

  private subscribeToInputChanges() {
    this.changeSubject
      .pipe(
        debounceTime(this.debounceTime),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((text) => this.changeSearch.emit(text));
  }
}
