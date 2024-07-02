import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConductorService } from 'src/app/conductor.service'; // Asegúrate de tener la ruta correcta

@Component({
  selector: 'app-conductor-nuevo',
  templateUrl: './conductor-nuevo.component.html',
  styleUrls: ['./conductor-nuevo.component.css']
})
export class ConductorNuevoComponent {

  SaveState: 'valid' | 'invalid' | null = null;

  constructor(private router: Router, private conductorService: ConductorService) { }

  TiposFigura = {
    TipoFigura: '',
    RFCFigura: '',
    NumLicencia: '',
    NombreFigura: ''
  };

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  onSubmit() {
    this.conductorService.guardarConductor(this.TiposFigura).subscribe(
      response => {
        console.log('Conductor guardado exitosamente:', response);
        this.SaveState = 'valid';
        setTimeout(() => {
          this.SaveState = null;
        }, 3000);
        
      },
      error => {
        console.error('Error al guardar el conductor:', error);
        this.SaveState = 'invalid';
        setTimeout(() => {
          this.SaveState = null;
        }, 3000);
      }
      
    );
  }
}
