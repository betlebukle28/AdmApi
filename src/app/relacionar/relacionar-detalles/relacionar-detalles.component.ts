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
        console.log(this.relacion);
      },
      error => {
        console.error('Error al obtener la relación:', error);
      }
    );
  }
}
