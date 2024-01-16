import { Component } from '@angular/core';
import { SwiperService } from '../../../../shared/services/swiper.service';
import { ThumbsGallerySwiperComponent } from '../../../../shared/components/thumbs-gallery-swiper-component/thumbs-gallery-swiper.component';
import { NoResultsFoundComponent } from '../../../../shared/components/no-results-found.component/no-results-found.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-artifacts',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, NoResultsFoundComponent, ThumbsGallerySwiperComponent],
  templateUrl: './artifacts.component.html',
  styleUrl: './artifacts.component.scss'
})
export class ArtifactsComponent {
  public artifactImages: string[];

  constructor(private swiperService: SwiperService) {
    this.artifactImages = this.swiperService.getArtifactImages();
  }
}
