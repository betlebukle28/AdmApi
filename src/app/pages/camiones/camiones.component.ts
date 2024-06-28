import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.css']
})
export class CamionesComponent {
  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
