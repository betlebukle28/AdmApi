import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { DatosComponent } from './pages/datos/datos.component';
import { XmlPageComponent } from './pages/xml-page/xml-page.component';
import { CamionesComponent } from './pages/camiones/camiones.component';
import { CamionConsultaComponent } from './pages/camion-consulta/camion-consulta.component';
import { ConductorConsultaComponent } from './pages/conductor-consulta/conductor-consulta.component';
import { CamionDetallesComponent } from './pages/camion-detalles/camion-detalles.component';
import { PerfilComponent } from './features/perfil/perfil.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { CamionEditarComponent } from './camion/camion-editar/camion-editar.component';
import { CamionNuevoComponent } from './camion/camion-nuevo/camion-nuevo.component';
import { ConductorNuevoComponent } from './conductores/conductor-nuevo/conductor-nuevo.component';
import { ConductorDetalleComponent } from './conductores/conductor-detalle/conductor-detalle.component';
import { ConductorEditarComponent } from './conductores/conductor-editar/conductor-editar.component';
import { RelacionarHomeComponent } from './relacionar/relacionar-home/relacionar-home.component';
import { RelacionarEditarComponent } from './relacionar/relacionar-editar/relacionar-editar.component'; 
import { ConductorService } from './conductor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RelacionNuevoComponent } from './relacion/relacion-nuevo/relacion-nuevo.component';
import { RelacionEditarComponent } from './relacion/relacion-editar/relacion-editar.component';
import { RelacionDetalleComponent } from './relacion/relacion-detalle/relacion-detalle.component';
import { RelacionarNuevoComponent } from './relacionar/relacionar-nuevo/relacionar-nuevo.component';
import { RelacionarDetallesComponent } from './relacionar/relacionar-detalles/relacionar-detalles.component';
import { TokenInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginFormComponent,
    DatosComponent,
    XmlPageComponent,
    CamionesComponent,
    CamionConsultaComponent,
    ConductorConsultaComponent,
    CamionDetallesComponent,
    PerfilComponent,
    SidebarComponent,
    CamionEditarComponent,
    CamionNuevoComponent,
    ConductorNuevoComponent,
    ConductorDetalleComponent,
    ConductorEditarComponent,
    RelacionarHomeComponent,
    RelacionarEditarComponent,
    RelacionNuevoComponent,
    RelacionEditarComponent,
    RelacionDetalleComponent,
    RelacionarNuevoComponent,
    RelacionarDetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
