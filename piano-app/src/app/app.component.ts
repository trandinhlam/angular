import { Component } from '@angular/core';

import { PianoMode } from './core/piano-mode.enum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano-app';
  // mode: 'play';

  constructor()
  {
  }
}
