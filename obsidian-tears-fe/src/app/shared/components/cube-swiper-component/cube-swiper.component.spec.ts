import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeSwiperComponent } from './cube-swiper.component';

describe('CubeSwiperComponent', () => {
  let component: CubeSwiperComponent;
  let fixture: ComponentFixture<CubeSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CubeSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CubeSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
