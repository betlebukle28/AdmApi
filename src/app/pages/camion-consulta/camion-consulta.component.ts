import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CamionService } from 'src/app/camion.service';

@Component({
  selector: 'app-camion-consulta',
  templateUrl: './camion-consulta.component.html',
  styleUrls: ['./camion-consulta.component.css']
})
export class CamionConsultaComponent {
  Autotransportes: any[] = [];

  constructor(private router: Router, private camionService: CamionService) { }

  ngOnInit(): void {
    this.obtenerAutotransportes();
  }

  obtenerAutotransportes() {
    this.camionService.obtenerAutotransportes().subscribe(
      data => {
        this.Autotransportes = data;
        console.log(this.Autotransportes);

      },
      error => {
        console.error('Error al obtener los conductores:', error);
      }
    );
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  confirmAndDelete(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este conductor?')) {
      this.camionService.eliminarAutotransporte(id).subscribe(
        response => {
          console.log('Conductor eliminado exitosamente:', response);
          this.obtenerAutotransportes(); // Actualiza la lista de conductores después de eliminar
        },
        error => {
          console.error('Error al eliminar el conductor:', error);
        }
      );
    }
  }
}
