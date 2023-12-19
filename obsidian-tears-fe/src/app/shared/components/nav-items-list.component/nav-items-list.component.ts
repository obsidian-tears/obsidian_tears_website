import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-nav-items-list',
  standalone: true,
  imports: [SharedModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-items-list.component.html',
  styleUrl: './nav-items-list.component.scss'
})
export class NavItemsListComponent {
  @Output() closeSidenavEvent = new EventEmitter<boolean>();

  showMovingLogo = false;

  onCloseSidenav(): void {
    this.closeSidenavEvent.emit();
  }
}
