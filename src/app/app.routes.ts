import { Routes } from '@angular/router';
import {ClientsListComponent} from 'src/app/pages/clients-list/clients-list.component';
import {UserRegistrationComponent} from 'src/app/components/user-registration/user-registration.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'clients-list',
    component: ClientsListComponent,
  },
  {
    path: 'register',
    component: UserRegistrationComponent,
  },
];
