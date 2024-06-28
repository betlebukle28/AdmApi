import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  passwordState: 'default' | 'valid' | 'invalid' = 'default';
  correctPassword: string = '123456'; // Pruebas xd
  
  constructor(private router: Router) { }

  navigateTo(page: string) {
    
    this.router.navigate([page]);
  }


  
  checkPassword() {
    if (this.currentPassword === this.correctPassword) {
      this.passwordState = 'valid';
    } else {
      this.passwordState = 'invalid';
    }
  }

  verifyPassword() {
    if (this.currentPassword === this.correctPassword) {
      this.passwordState = 'valid';
    } else {
      this.passwordState = 'invalid';
    }
  }

  changePassword() {
    if (this.newPassword === this.confirmNewPassword && this.passwordState === 'valid') {
      // Lógica para cambiar la contraseña
      console.log('Contraseña cambiada exitosamente');
    } else {
      console.log('Las contraseñas no coinciden o la contraseña actual es incorrecta');
    }
  }

}
