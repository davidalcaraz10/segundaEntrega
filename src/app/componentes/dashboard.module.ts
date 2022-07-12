import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../modules/material/material.module';
import { HeaderComponent } from './dashboard/header/header.component';
import { MainComponent } from './dashboard/main/main.component';
import { FormularioComponent } from './dashboard/main/formulario/formulario.component';
import { TableComponent } from './dashboard/main/table/table.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './dashboard/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MainComponent,
    FormularioComponent,
    TableComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTooltipModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
