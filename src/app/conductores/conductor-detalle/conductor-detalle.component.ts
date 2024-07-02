import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConductorService } from 'src/app/conductor.service';

@Component({
  selector: 'app-conductor-detalle',
  templateUrl: './conductor-detalle.component.html',
  styleUrls: ['./conductor-detalle.component.css']
})
export class ConductorDetalleComponent implements OnInit {
  conductor: any = {};

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

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
