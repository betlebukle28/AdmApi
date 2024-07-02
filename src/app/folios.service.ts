import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoliosService {

  private apiUrl = 'https://transportesdelbosque.com.mx/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  listarFolios(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/folioaux`, { headers })
      .pipe(
        catchError(this.handleError<any>('listarFolios'))
      );
  }

  listarConductores(): Observable<any> {//Listar los folios para relacionar en editar o en nuevo
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // return this.http.get<any>(`${this.apiUrl}/folioaux`);
    return this.http.get<any>(`${this.apiUrl}/conductores`, { headers })
      .pipe(
        catchError(this.handleError<any>('listarConductores'))
      );
  }

  listarAutotransportes(): Observable<any> {//Listar los folios para relacionar en editar o en nuevo
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // return this.http.get<any>(`${this.apiUrl}/folioaux`);
    return this.http.get<any>(`${this.apiUrl}/autotransportes`, { headers })
      .pipe(
        catchError(this.handleError<any>('listarAutotransportes'))
      );
  }

  listarRelaciones(): Observable<any> {// Listar las relaciones para tabla Home
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // return this.http.get<any>(`${this.apiUrl}/folioaux`);
    return this.http.get<any>(`${this.apiUrl}/foliosuat`, { headers })
      .pipe(
        catchError(this.handleError<any>('listarRelaciones'))
      )
    // return this.http.get<any>(`${this.apiUrl}/foliosuat`);
  }

  eliminarRelacion(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(`${this.apiUrl}/foliosuat/${id}`, { headers })
      .pipe(
        catchError(this.handleError<any>('eliminarRelacion'))
      );
  }

  guardarRelacion(relacion: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.apiUrl}/guardarFolioSuat`, relacion, { headers })
      .pipe(
        catchError(this.handleError<any>('guardarRelacion'))
      );
  }

  obtenerRelacionPorId(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/foliosuat/${id}`, { headers })
      .pipe(
        catchError(this.handleError<any>('obtenerRelacionPorId'))
      );
  }

  actualizarRelacion(id: string, relacion: any): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.apiUrl}/foliosuat/${id}`, relacion, { headers })
      .pipe(
        catchError(this.handleError<any>('actualizarRelacion'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
