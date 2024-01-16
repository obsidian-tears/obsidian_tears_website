import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([
  Navigation, Pagination, Thumbs
])
@Component({
  selector: 'app-thumbs-gallery-swiper',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './thumbs-gallery-swiper.component.html',
  styleUrl: './thumbs-gallery-swiper.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ThumbsGallerySwiperComponent {
  @Input({ required: true }) swiperImages!: string[];

  thumbsSwiper: any;
}
