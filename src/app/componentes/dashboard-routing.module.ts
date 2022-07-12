import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { FormularioComponent } from './dashboard/main/formulario/formulario.component';
import { TableComponent } from './dashboard/main/table/table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'inicio', component: InicioComponent },
    { path: 'table', component: TableComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'editarAlumno', component: FormularioComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
