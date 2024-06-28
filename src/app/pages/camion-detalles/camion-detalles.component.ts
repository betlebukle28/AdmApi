import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camion-detalles',
  templateUrl: './camion-detalles.component.html',
  styleUrls: ['./camion-detalles.component.css']
})
export class CamionDetallesComponent {
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
