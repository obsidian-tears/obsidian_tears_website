import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([
  Navigation, Pagination, Thumbs
]);

@Component({
  selector: 'app-parallax-gallery-swiper',
  standalone: true,
  imports: [CommonModule, SwiperModule, MatProgressSpinnerModule],
  templateUrl: './parallax-gallery-swiper.component.html',
  styleUrls: ['./parallax-gallery-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ParallaxGallerySwiperComponent {
  @Input() swiperObjects!: any[];

  thumbsSwiper: any;
}