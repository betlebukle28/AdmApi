import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

declare var bootstrap: any; // Asegúrate de que bootstrap esté correctamente importado

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  modal: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token && this.authService.isTokenExpired(token)) {
      this.showSessionExpiredModal();
    }
  }

  showSessionExpiredModal() {
    this.modal = new bootstrap.Modal(document.getElementById('sessionExpiredModal'), {
      backdrop: 'static',
      keyboard: false
    });
    this.modal.show();
  }

  logout() {
    this.authService.logout();
    this.modal.hide();
    this.router.navigate(['/login']);
  }
}
