import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }
  navigateTo(page: string) {
    
    this.router.navigate([page]);
  }


  login() {
    this.router.navigate(['#']);
    if (this.username === 'admin' && this.password === 'admin') { // Ejemplo de validación de credenciales
      this.authService.login('dummy-token'); // Usa un token dummy para la sesión
      this.router.navigate(['perfil']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
