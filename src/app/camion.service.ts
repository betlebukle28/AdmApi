import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  private apiUrl = 'https://transportesdelbosque.com.mx/api'; // Base URL del endpoint de tu backend

  constructor(private http: HttpClient, private authService: AuthService) { }

  obtenerAutotransportes(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/autotransportes`, { headers })
      .pipe(
        catchError(this.handleError<any>('obtenerAutotransportes'))
      );
  }

  guardarAutotransportes(camion: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.apiUrl}/guardarAutotransporte`, camion, { headers })
      .pipe(
        catchError(this.handleError<any>('guardarAutotransportes'))
      );
  }

  eliminarAutotransporte(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.apiUrl}/autotransportes/${id}`, { headers })
      .pipe(
        catchError(this.handleError<any>('eliminarAutotransporte'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  obtenerAutotransportePorId(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/autotransportes/${id}`, { headers })
      .pipe(
        catchError(this.handleError<any>('obtenerAutotransportePorId'))
      );
  }

  actualizarAutotransporte(id: string, conductor: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.apiUrl}/autotransportes/${id}`, conductor, { headers })
      .pipe(
        catchError(this.handleError<any>('actualizarAutotransporte'))
      );
  }

}
