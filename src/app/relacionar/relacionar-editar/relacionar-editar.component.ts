import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FoliosService } from 'src/app/folios.service';

@Component({
  selector: 'app-relacionar-editar',
  templateUrl: './relacionar-editar.component.html',
  styleUrls: ['./relacionar-editar.component.css']
})
export class RelacionarEditarComponent implements OnInit {
  Folios: any[] = [];
  Autotransportes: any[] = [];
  Conductores: any[] = [];
  relacionId: string = '';
  relaciones = {
    Autotransporte: '',
    FiguraTransporte: '',
    folio: ''
  };

  SaveState: 'valid' | 'invalid' | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private foliosService: FoliosService
  ) { }

  ngOnInit(): void {
    this.relacionId = this.route.snapshot.paramMap.get('id')!;
    this.obtenerFolios();
    this.obtenerConductores();
    this.obtenerAutotransportes();
    this.obtenerRelacion();
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  obtenerFolios() {
    this.foliosService.listarFolios().subscribe(
      data => {
        this.Folios = data;
        console.log('Folios:', this.Folios);
      },
      error => {
        console.error('Error al obtener los folios:', error);
      }
    );
  }

  obtenerConductores() {
    this.foliosService.listarConductores().subscribe(
      data => {
        this.Conductores = data;
        console.log('Conductores:', this.Conductores);
      },
      error => {
        console.error('Error al obtener los conductores:', error);
      }
    );
  }

  obtenerAutotransportes() {
    this.foliosService.listarAutotransportes().subscribe(
      data => {
        this.Autotransportes = data;
        console.log('Autotransportes:', this.Autotransportes);
      },
      error => {
        console.error('Error al obtener los autotransportes:', error);
      }
    );
  }

  obtenerRelacion() {
    this.foliosService.obtenerRelacionPorId(this.relacionId).subscribe(
      data => {
        this.relaciones = {
          Autotransporte: data.Autotransporte._id,
          FiguraTransporte: data.FiguraTransporte._id,
          folio: data.FolioSuat  // Asigna el valor del folio
        };
        console.log('Relación:', this.relaciones);
      },
      error => {
        console.error('Error al obtener la relación:', error);
      }
    );
  }

  onSubmit() {
    if (this.relaciones.FiguraTransporte && this.relaciones.Autotransporte && this.relaciones.folio) {
      console.log(this.relaciones); // Asegúrate de que los datos están en el formato correcto
      this.foliosService.actualizarRelacion(this.relacionId, this.relaciones).subscribe(
        response => {
          console.log('Relación actualizada exitosamente:', response);
          this.SaveState = 'valid';
          setTimeout(() => {
            this.SaveState = null;
            this.navigateTo('relacionarHome');
          }, 3000);
        },
        error => {
          console.error('Error al actualizar la relación:', error);
          this.SaveState = 'invalid';
          setTimeout(() => {
            this.SaveState = null;
          }, 3000);
        }
      );
    } else {
      this.SaveState = 'invalid';
      setTimeout(() => {
        this.SaveState = null;
      }, 3000);
    }
  }
  
}
