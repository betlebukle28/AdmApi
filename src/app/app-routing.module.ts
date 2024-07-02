import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DatosComponent } from './pages/datos/datos.component';
import { XmlPageComponent } from './pages/xml-page/xml-page.component';
import { CamionesComponent } from './pages/camiones/camiones.component';
import { CamionConsultaComponent } from './pages/camion-consulta/camion-consulta.component';
import { ConductorConsultaComponent } from './pages/conductor-consulta/conductor-consulta.component';
import { CamionDetallesComponent } from './pages/camion-detalles/camion-detalles.component';
import { PerfilComponent } from './features/perfil/perfil.component';
import { LoginFormComponent } from './features/login-form/login-form.component';
import { CamionEditarComponent } from './camion/camion-editar/camion-editar.component';
import { CamionNuevoComponent } from './camion/camion-nuevo/camion-nuevo.component';
import { ConductorEditarComponent } from './conductores/conductor-editar/conductor-editar.component';
import { ConductorDetalleComponent } from './conductores/conductor-detalle/conductor-detalle.component';
import { ConductorNuevoComponent } from './conductores/conductor-nuevo/conductor-nuevo.component';
import { RelacionarHomeComponent } from './relacionar/relacionar-home/relacionar-home.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'XmlPage', component: XmlPageComponent, canActivate: [AuthGuard] },
  { path: 'Camion', component: CamionesComponent, canActivate: [AuthGuard]},
  { path: 'camionConsulta', component: CamionConsultaComponent, canActivate: [AuthGuard] },
  { path: 'conductorConsulta', component: ConductorConsultaComponent, canActivate: [AuthGuard]},
  { path: 'CamionDetalles/:id', component: CamionDetallesComponent, canActivate: [AuthGuard] },
  { path: 'Perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: 'camionEditar/:id', component: CamionEditarComponent, canActivate: [AuthGuard] },
  { path: 'camionNuevo', component: CamionNuevoComponent, canActivate: [AuthGuard]},
  { path: 'conductorEditar/:id', component: ConductorEditarComponent, canActivate: [AuthGuard] },
  { path: 'conductorDetalle/:id', component: ConductorDetalleComponent, canActivate: [AuthGuard] },
  { path: 'conductorNuevo', component: ConductorNuevoComponent, canActivate: [AuthGuard]},
  { path: 'relacionarHome', component: RelacionarHomeComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' } // Redirigir a Home en caso de una ruta no existente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
