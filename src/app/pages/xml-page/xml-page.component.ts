import { Component, OnInit } from '@angular/core';
import { XmlService } from 'src/app/xml.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-xml-page',
  templateUrl: './xml-page.component.html',
  styleUrls: ['./xml-page.component.css']
})
export class XmlPageComponent implements OnInit {
  archivosXML: any[] = [];
  archivosFiltrados: any[] = [];

  constructor(
    private router: Router,
    private xmlService: XmlService,
    private route: ActivatedRoute
  ) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit(): void {
    this.obtenerArchivosXML();
  }

  obtenerArchivosXML() {
    this.xmlService.listarArchivosXML().subscribe(
      data => {
        this.archivosXML = data;
        this.archivosFiltrados = data; // Inicialmente, los archivos filtrados son los mismos que los originales
      },
      error => {
        console.error('Error al obtener los archivos XML:', error);
      }
    );
  }

  descargarArchivo(nombreArchivo: string) {
    this.xmlService.descargarXML(nombreArchivo).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = nombreArchivo;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error => {
        console.error('Error al descargar el archivo:', error);
      }
    );
  }
  
  filtrarPorFecha(event: any) {
    const fechaSeleccionada = event.target.value;
    if (fechaSeleccionada) {
      this.archivosFiltrados = this.archivosXML.filter(archivo => {
        const fechaArchivo = new Date(archivo.fechaCreacion).toISOString().split('T')[0];
        return fechaArchivo === fechaSeleccionada;
      });
    } else {
      this.archivosFiltrados = this.archivosXML; // Mostrar todos los archivos si no hay filtro
    }
  }

}
