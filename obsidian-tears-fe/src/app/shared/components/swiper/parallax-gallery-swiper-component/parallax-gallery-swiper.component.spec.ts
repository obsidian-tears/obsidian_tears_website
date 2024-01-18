import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxGallerySwiperComponent } from './parallax-gallery-swiper.component';

describe('ParallaxGallerySwiperComponent', () => {
  let component: ParallaxGallerySwiperComponent;
  let fixture: ComponentFixture<ParallaxGallerySwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxGallerySwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParallaxGallerySwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
