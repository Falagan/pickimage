import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageGoToSearchComponent } from './image-go-to-search.component';

describe('ImageGoToSearchComponent', () => {
  let component: ImageGoToSearchComponent;
  let fixture: ComponentFixture<ImageGoToSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGoToSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGoToSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
