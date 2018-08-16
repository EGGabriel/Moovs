import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  { path : 'employees', component: EmployeesComponent},
  { path : 'login', component: LoginComponent},
  { path : '', redirectTo : '/login', pathMatch : 'full' },
  { path : 'filmes', component: FilmesComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouteModule { }