// src/app/datos/datos.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
