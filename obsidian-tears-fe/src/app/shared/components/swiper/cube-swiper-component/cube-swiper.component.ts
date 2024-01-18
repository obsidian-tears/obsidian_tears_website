import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectCube, Navigation, Pagination } from 'swiper';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([
  Navigation, Pagination, EffectCube
])
@Component({
  selector: 'app-cube-swiper',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './cube-swiper.component.html',
  styleUrl: './cube-swiper.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CubeSwiperComponent {
  @Input({ required: true }) swiperImages!: string[];
}
