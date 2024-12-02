import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ApiService, Client } from '../../services/api.service';
import {ClientCardComponent} from '../../components/client-card/client-card.component';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, IonicModule, ClientCardComponent],
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchClients();
  }

  async fetchClients() {
    this.loading = true;
    try {
      this.clients = await this.apiService.getClients();
    } catch (error) {
      this.errorMessage = 'Error al cargar los clientes';
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
}
