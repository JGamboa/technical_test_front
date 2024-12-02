import { Component, Input } from '@angular/core';
import { Client } from '../../services/api.service';
import {GoogleMapsModule} from "@angular/google-maps";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, GoogleMapsModule]
})
export class ClientCardComponent {
  @Input() client!: Client;
}
