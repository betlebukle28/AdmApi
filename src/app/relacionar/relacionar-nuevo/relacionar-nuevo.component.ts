import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoliosService } from 'src/app/folios.service';

@Component({
  selector: 'app-relacionar-nuevo',
  templateUrl: './relacionar-nuevo.component.html',
  styleUrls: ['./relacionar-nuevo.component.css']
})
export class RelacionarNuevoComponent implements OnInit {
  Folios: any[] = [];
  Autotransportes: any[] = [];
  Conductores: any[] = [];

  relaciones = {
    autotransporte: '',
    conductor: '',
    folioSuat: ''
  };

  SaveState: 'valid' | 'invalid' | null = null;

  constructor(
    private router: Router, 
    private foliosService: FoliosService
  ) { }

  ngOnInit(): void {
    this.obtenerFolios();
    this.obtenerConductores();
    this.obtenerAutotransportes();
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  obtenerFolios() {
    this.foliosService.listarFolios().subscribe(
      data => {
        this.Folios = data;
        // console.log(this.Folios);
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
        // console.log(this.Conductores);
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
        // console.log(this.Autotransportes);
      },
      error => {
        console.error('Error al obtener los autotransportes:', error);
      }
    );
  }

  onSubmit() {
    if (this.relaciones.conductor && this.relaciones.autotransporte && this.relaciones.folioSuat) {
      console.log(this.relaciones);
      this.foliosService.guardarRelacion(this.relaciones).subscribe(
        response => {
          console.log('Relacion guardada exitosamente:', response);
          this.SaveState = 'valid';
          setTimeout(() => {
            this.SaveState = null;
            this.navigateTo('relacionarHome');
          }, 3000);
        },
        error => {
          console.error('Error al guardar la relacion:', error);
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
