import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  entry: any[]; // Ajusta esto según la estructura real de 'entry'
  id: string;
  lastUpdated: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://test.rempe.es/rempe/api/v3/professionals?profCollegeNumber=412833659'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => {
        console.log('Respuesta de la API:', response);
        return response.entry;
      })
    );
  }
}
