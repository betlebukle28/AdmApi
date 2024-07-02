import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoliosService } from 'src/app/folios.service';

@Component({
  selector: 'app-relacionar-home',
  templateUrl: './relacionar-home.component.html',
  styleUrls: ['./relacionar-home.component.css']
})
export class RelacionarHomeComponent {
  relaciones: any[] = [];

  // relaciones = {
  //   Autotransporte: '',
  //   FiguraTransporte: '',
  //   FolioSuat: '',
   
  // };

  SaveState: 'valid' | 'invalid' | null = null;

  constructor(
    private router: Router,
    private foliosService: FoliosService
  ) { }

  ngOnInit(): void {
    this.obtenerRelaciones();
  }

  obtenerRelaciones() {
    this.foliosService.listarRelaciones().subscribe(
      data => {
        this.relaciones = data;
        console.log(this.relaciones);
      },
      
      error => {
        console.error('Error al obtener las relaciones:', error);
      }
    );
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  confirmAndDelete(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta relacion?')) {
      this.foliosService.eliminarRelacion(id).subscribe(
        response => {
          console.log('Conductor eliminado exitosamente:', response);
          this.obtenerRelaciones(); // Actualiza la lista de conductores después de eliminar
        },
        error => {
          console.error('Error al eliminar el conductor:', error);
        }
      );
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
      // Aquí puedes agregar la lógica para manejar el archivo seleccionado
    }
  }

  
  
}
