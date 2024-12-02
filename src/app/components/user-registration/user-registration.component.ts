import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from 'src/app/services/api.service';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserRegistrationComponent {
  formData = {
    name: '',
    address: '',
  };

  loading = false;

  constructor(private apiService: ApiService, private router: Router) {}


  async onSubmit() {
    this.loading = true;

    this.loading = true;
    try {
      this.apiService.createClient(this.formData).subscribe({
        next: (result) => {
          console.log('Cliente registrado exitosamente:', result);
          this.router.navigate(['/clients-list']); // Redirect to the clients list after registration
        },
        error: (error) => {
          console.error('Error al registrar cliente:', error);
          alert('Ocurrió un error al registrar al cliente. Inténtalo nuevamente.');
        },
        complete: () => {
          this.loading = false;
        },
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('Ocurrió un error inesperado. Inténtalo nuevamente.');
      this.loading = false;
    }
  }

}
