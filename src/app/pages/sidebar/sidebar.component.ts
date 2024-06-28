import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private authService: AuthService, private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  changePassword() {
    // Aquí puedes agregar la lógica para cambiar la contraseña
    console.log("Cambiar Contraseña");
  }



  logout() {
    this.authService.logout();
    console.log("Cerrar Sesión");
    this.router.navigate(['login']);
  }
}
