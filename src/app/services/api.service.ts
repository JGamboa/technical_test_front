import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {catchError, Observable, of} from 'rxjs';

export interface Client {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getClients(): Promise<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
      .pipe(
        catchError((error) => {
          console.error('Error fetching clients:', error);
          return of([]);
        })
      )
      .toPromise() as Promise<Client[]>;
  }

  createClient(clientData: Partial<Client>): Observable<any> {
    return this.http.post(`${this.baseUrl}`, clientData);
  }
}
