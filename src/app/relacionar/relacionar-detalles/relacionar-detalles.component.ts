import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoliosService } from 'src/app/folios.service';

@Component({
  selector: 'app-relacionar-detalles',
  templateUrl: './relacionar-detalles.component.html',
  styleUrls: ['./relacionar-detalles.component.css']
})
export class RelacionarDetallesComponent implements OnInit {
  relacion: any = {};
  relacionFolio = {
    Autotransporte: '',
    FiguraTransporte: '',
    folio: '',
    fleteB: 0,
    casetas: 0,
    diesel: 0,
    stops: 0,
    total: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foliosService: FoliosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerRelacion(id);
    }
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  obtenerRelacion(id: string) {
    this.foliosService.obtenerRelacionPorId(id).subscribe(
      data => {
        this.relacion = data;
        console.log('Relacion: ', this.relacion);
        console.log('data: ', data);
        this.relacionFolio = {
          Autotransporte: this.relacion.FiguraTransporte.NombreFigura,
          FiguraTransporte: this.relacion.Autotransporte.IdentificacionVehicular.PlacaVM,
          folio: this.relacion.FolioSuat,
          fleteB: this.relacion.FleteBase,
          casetas: this.relacion.Casetas,
          diesel: this.relacion.Diesel,
          stops: this.relacion.Stops,
          total: this.relacion.Total,
        };
      },
      error => {
        console.error('Error al obtener la relación:', error);
      }
    );
    // this.relacionFolio = {
    //   Autotransporte: this.relacion.FiguraTransporte.NombreFigura,
    //   FiguraTransporte: this.relacion.Autotransporte.IdentificacionVehicular.PlacaVM,
    //   folio: this.relacion.FolioSuat,
    //   fleteB: this.relacion.FleteBase,
    //   casetas: this.relacion.Casetas,
    //   diesel: this.relacion.Diesel,
    //   stops: this.relacion.Stops,
    //   total: this.relacion.Total,
    // };
  }
}
