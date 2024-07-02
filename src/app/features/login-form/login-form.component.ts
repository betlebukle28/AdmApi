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
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        if (response.data && response.data.token) {
          this.authService.login(response.data.token); // Guarda el token
          this.router.navigate(['perfil']); // Redirige al perfil
        } else {
          this.errorMessage = 'Credenciales inválidas. Por favor, inténtelo de nuevo.';
        }
      },
      error => {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Credenciales inválidas. Por favor, inténtelo de nuevo.';
      }
    );
  }
}
