import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
