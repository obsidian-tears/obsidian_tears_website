import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RotateCharsDirective } from '../../../../shared/directives/rotate-chars.directive';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, RotateCharsDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  scrambleState = 'show';

}
