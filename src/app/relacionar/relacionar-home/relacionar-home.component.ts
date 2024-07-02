import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relacionar-home',
  templateUrl: './relacionar-home.component.html',
  styleUrls: ['./relacionar-home.component.css']
})
export class RelacionarHomeComponent {
  SaveState: 'valid' | 'invalid' | null = null;
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  confirmAndDelete() {
    const confirmed = confirm("¿Estás seguro de que deseas eliminar este conductor?");
    if (confirmed) {
      // Aquí llamas a tu servicio para eliminar el camión de la base de datos
      console.log("Camión eliminado");
      // Lógica para eliminar el camión va aquí
    } else {
      console.log("Eliminación cancelada");
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
      // Aquí puedes agregar la lógica para manejar el archivo seleccionado
    }
  }

  TiposFigura = {
    TipoFigura: '01',    
    RFCFigura: 'NumPermisoSCT1',
    NumLicencia: 'a234567890',
    NombreFigura: 'Juan Jose Bermejo Estrada',
   
  };
  
}
