import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoResultsFoundComponent } from '../../../../shared/components/no-results-found.component/no-results-found.component';
import { ParallaxGallerySwiperComponent } from '../../../../shared/components/swiper/parallax-gallery-swiper-component/parallax-gallery-swiper.component';
import { SwiperService } from '../../../../shared/services/swiper.service';
import { Governance } from './models/governance.model.interface';

@Component({
  selector: 'app-governance',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, NoResultsFoundComponent, ParallaxGallerySwiperComponent],
  templateUrl: './governance.component.html',
  styleUrl: './governance.component.scss'
})
export class GovernanceComponent {
  public governances: Governance[] = [];

  constructor(private swiperService: SwiperService) {
    this.governances = this.swiperService.getGovernances();
  }
}
