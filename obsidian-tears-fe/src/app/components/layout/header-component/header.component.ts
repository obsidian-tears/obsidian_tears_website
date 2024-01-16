import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavItemsListComponent } from '../../../shared/components/nav-items-list.component/nav-items-list.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, NavItemsListComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('logoAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'scale(1.2) rotate(0deg)' // Initial rotation
      })),
      state('hide', style({
        opacity: 0.8,
        transform: 'scale(1) rotate(-360deg)' // Final rotation on hide
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HeaderComponent {

  @Input() inputSideNav?: MatSidenav;

  showMovingLogo = false;

  constructor() { }

  isRotating(): string {
    return this.showMovingLogo ? 'show' : 'hide';
  }

}
