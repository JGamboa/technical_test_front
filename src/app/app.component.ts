import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from 'ionicons';
import {library, listOutline, playCircle, radio, search} from 'ionicons/icons';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports:  [IonicModule, RouterModule],
})
export class AppComponent {
  constructor() {
    addIcons({ library, playCircle, radio, search, listOutline });
  }
}
