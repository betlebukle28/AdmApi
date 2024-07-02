import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorService } from 'src/app/conductor.service';

@Component({
  selector: 'app-conductor-consulta',
  templateUrl: './conductor-consulta.component.html',
  styleUrls: ['./conductor-consulta.component.css']
})
export class ConductorConsultaComponent implements OnInit {
  conductores: any[] = [];

  constructor(private router: Router, private conductorService: ConductorService) { }

  ngOnInit(): void {
    this.obtenerConductores();
  }

  obtenerConductores() {
    this.conductorService.obtenerConductores().subscribe(
      data => {
        this.conductores = data;
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
      this.conductorService.eliminarConductor(id).subscribe(
        response => {
          console.log('Conductor eliminado exitosamente:', response);
          this.obtenerConductores(); // Actualiza la lista de conductores después de eliminar
        },
        error => {
          console.error('Error al eliminar el conductor:', error);
        }
      );
    }
  }
}
