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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
