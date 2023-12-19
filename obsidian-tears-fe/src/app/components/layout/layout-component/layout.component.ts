import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer-component/footer.component';
import { HeaderComponent } from '../header-component/header.component';
import { NavItemsListComponent } from '../../../shared/components/nav-items-list.component/nav-items-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, FooterComponent, NavItemsListComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
