import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from 'src/app/conductor.service';

@Component({
  selector: 'app-conductor-editar',
  templateUrl: './conductor-editar.component.html',
  styleUrls: ['./conductor-editar.component.css']
})
export class ConductorEditarComponent implements OnInit {
  SaveState: 'valid' | 'invalid' | null = null;
  conductor: any = {
    TipoFigura: '',
    RFCFigura: '',
    NumLicencia: '',
    NombreFigura: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private conductorService: ConductorService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerConductor(id);
    }
  }

  obtenerConductor(id: string) {
    this.conductorService.obtenerConductorPorId(id).subscribe(
      data => {
        this.conductor = data;
      },
      error => {
        console.error('Error al obtener el conductor:', error);
      }
    );
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.conductorService.actualizarConductor(id, this.conductor).subscribe(
        response => {
          console.log('Conductor actualizado exitosamente:', response);
          this.SaveState = 'valid';
          setTimeout(() => {
            this.SaveState = null;
          }, 3000);
        },
        error => {
          console.error('Error al actualizar el conductor:', error);
          this.SaveState = 'invalid';
          setTimeout(() => {
            this.SaveState = null;
          }, 3000);
        }
      );
    }
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
