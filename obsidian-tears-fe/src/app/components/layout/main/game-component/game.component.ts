import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CubeSwiperComponent } from '../../../../shared/components/cube-swiper-component/cube-swiper.component';
import { NoResultsFoundComponent } from '../../../../shared/components/no-results-found.component/no-results-found.component';
import { SwiperService } from '../../../../shared/services/swiper.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, NoResultsFoundComponent, CubeSwiperComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  public gameImages: string[];

  constructor(private swiperService: SwiperService) {
    this.gameImages = this.swiperService.getGameImages();
  }
}
