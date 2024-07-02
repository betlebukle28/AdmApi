import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CamionService } from 'src/app/camion.service';

@Component({
  selector: 'app-camion-nuevo',
  templateUrl: './camion-nuevo.component.html',
  styleUrls: ['./camion-nuevo.component.css']
})
export class CamionNuevoComponent {

  SaveState: 'valid' | 'invalid' | null = null;
  constructor(private router: Router, private camionService: CamionService) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  camion = {
    PermSCT: '',
    NumPermisoSCT: '',
    IdentificacionVehicular: {
      ConfigVehicular: '',
      PesoBrutoVehicular: '',
      PlacaVM: '',
      AnioModeloVM: ''
    },
    Seguros: {
      AseguraRespCivil: '',
      PolizaRespCivil: ''
    },
    Remolques: {
      Remolque: [
        {
          SubTipoRem: '',
          Placa: ''
        }
      ]
    }
  };

  onSubmit() {
    this.camionService.guardarAutotransportes(this.camion).subscribe(
      response => {
        console.log('Autotransporte guardado con éxito:', response);
        this.SaveState = 'valid';
        setTimeout(() => {
          this.SaveState = null;
          this.navigateTo('camionConsulta');
        }, 3000);
      },
      error => {
        console.error('Error al guardar el autotransporte:', error);
        this.SaveState = 'invalid';
        setTimeout(() => {
          this.SaveState = null;
        }, 3000);
      }
    );
  }

}
