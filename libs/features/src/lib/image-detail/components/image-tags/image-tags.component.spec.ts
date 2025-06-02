import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageTagsComponent } from './image-tags.component';

describe('ImageTagsComponent', () => {
  let component: ImageTagsComponent;
  let fixture: ComponentFixture<ImageTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTagsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImageTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
