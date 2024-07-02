import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CamionService } from 'src/app/camion.service';

@Component({
  selector: 'app-camion-detalles',
  templateUrl: './camion-detalles.component.html',
  styleUrls: ['./camion-detalles.component.css']
})
export class CamionDetallesComponent implements OnInit {
  // Autotransporte: any = {};

  Autotransporte = {
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
        this.Autotransporte = data;
        console.log('Datos del Autotransporte:', this.Autotransporte);
      },
      error => {
        console.error('Error al obtener el Autotransporte:', error);
      }
    );
  }
  
  

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
