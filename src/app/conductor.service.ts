import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  private apiUrl = 'http://localhost:3000/api'; // Base URL del endpoint de tu backend

  constructor(private http: HttpClient, private authService: AuthService) { }

  obtenerConductores(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/conductores`, { headers })
      .pipe(
        catchError(this.handleError<any>('obtenerConductores'))
      );
  }

  guardarConductor(conductor: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.apiUrl}/guardarCamionero`, conductor, { headers })
      .pipe(
        catchError(this.handleError<any>('guardarConductor'))
      );
  }

  eliminarConductor(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.apiUrl}/conductores/${id}`, { headers })
      .pipe(
        catchError(this.handleError<any>('eliminarConductor'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  obtenerConductorPorId(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/conductores/${id}`, { headers })
      .pipe(
        catchError(this.handleError<any>('obtenerConductorPorId'))
      );
  }

  actualizarConductor(id: string, conductor: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.apiUrl}/conductores/${id}`, conductor, { headers })
      .pipe(
        catchError(this.handleError<any>('actualizarConductor'))
      );
  }

}
