import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-no-results-found',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './no-results-found.component.html',
  styleUrl: './no-results-found.component.scss'
})
export class NoResultsFoundComponent {

}
