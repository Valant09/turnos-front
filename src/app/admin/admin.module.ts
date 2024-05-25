import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { TurnosComponent } from './turnos/turnos.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige '/admin' a '/admin/home'
      { path: 'perfil', component: PerfilComponent },
      { path: 'home', component: AdminComponent },
      { path: 'turnos', component: TurnosComponent },
      // otras rutas...
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, PerfilComponent, TurnosComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ]
})
export class AdminModule { }