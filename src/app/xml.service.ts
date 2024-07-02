import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XmlService {
  private apiUrl = 'https://transportesdelbosque.com.mx/api';

  constructor(private http: HttpClient) { }

  listarArchivosXML(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listarArchivosXML`);
  }

  descargarXML(nombreArchivo: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/descargarXML/${nombreArchivo}`, { responseType: 'blob' });
  }
}
