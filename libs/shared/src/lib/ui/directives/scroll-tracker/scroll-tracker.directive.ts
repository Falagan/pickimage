import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, map } from 'rxjs';

@Directive({
  selector: '[sharedScrollTracker]',
})
export class ScrollTrackerDirective implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef);
  @Output() scrollPosition = new EventEmitter<number>();
  @Output() scrolledToBottom = new EventEmitter<void>();
  @Output() scrolledToTop = new EventEmitter<void>();

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    fromEvent(element, 'scroll')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map(() => ({
          scrollTop: element.scrollTop,
          scrollHeight: element.scrollHeight,
          clientHeight: element.clientHeight,
        }))
      )
      .subscribe(({ scrollTop, scrollHeight, clientHeight }) => {
        this.scrollPosition.emit(scrollTop);

        // Detect bottom
        if (scrollTop + clientHeight >= scrollHeight) {
          this.scrolledToBottom.emit();
        }

        // Detect top
        if (scrollTop) {
          this.scrolledToTop.emit();
        }
      });
  }

}
