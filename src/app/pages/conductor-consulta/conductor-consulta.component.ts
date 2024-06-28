import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conductor-consulta',
  templateUrl: './conductor-consulta.component.html',
  styleUrls: ['./conductor-consulta.component.css']
})
export class ConductorConsultaComponent {
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  confirmAndDelete() {
    const confirmed = confirm("¿Estás seguro de que deseas eliminar este camión?");
    if (confirmed) {
      // Aquí llamas a tu servicio para eliminar el camión de la base de datos
      console.log("Camión eliminado");
      // Lógica para eliminar el camión va aquí
    } else {
      console.log("Eliminación cancelada");
    }
  }
}
