import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsGallerySwiperComponent } from './thumbs-gallery-swiper.component';

describe('ThumbsGallerySwipperComponent', () => {
  let component: ThumbsGallerySwiperComponent;
  let fixture: ComponentFixture<ThumbsGallerySwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbsGallerySwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThumbsGallerySwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
