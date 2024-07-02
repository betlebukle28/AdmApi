import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CamionService } from 'src/app/camion.service';

@Component({
  selector: 'app-camion-editar',
  templateUrl: './camion-editar.component.html',
  styleUrls: ['./camion-editar.component.css']
})
export class CamionEditarComponent implements OnInit {
  SaveState: 'valid' | 'invalid' | null = null;

  camionInfo = {
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private camionService: CamionService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerAutotransporte(id);
    }
  }

  obtenerAutotransporte(id: string) {
    this.camionService.obtenerAutotransportePorId(id).subscribe(
      data => {
        this.camionInfo = data;
        console.log(this.camionInfo);
      },
      error => {
        console.error('Error al obtener el autotransporte:', error);
      }
    );
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.camionService.actualizarAutotransporte(id, this.camionInfo).subscribe(
        response => {
          console.log('Autotransporte actualizado con éxito:', response);
          this.SaveState = 'valid';
          setTimeout(() => {
            this.SaveState = null;
            this.navigateTo('camionConsulta');
          }, 3000);
        },
        error => {
          console.error('Error al actualizar el autotransporte:', error);
          this.SaveState = 'invalid';
          setTimeout(() => {
            this.SaveState = null;
          }, 3000);
        }
      );
    }
  }
}
