import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumnos } from 'src/app/interfaces/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private fb: FormBuilder, private alumnosService: AlumnosService, private _snackBar: MatSnackBar) { }

  formularioAlumnos = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    clase: ['', [Validators.required, Validators.minLength(6)]],
    curso: ['', [Validators.required, Validators.minLength(5)]],
  })

  ngOnInit(): void {
  }

  agregarAlumno() {
    const alumno: Alumnos = { 
      nombre: this.formularioAlumnos.value.nombre,
      apellido: this.formularioAlumnos.value.apellido,
      email: this.formularioAlumnos.value.email,
      clase: this.formularioAlumnos.value.clase,
      curso: this.formularioAlumnos.value.curso,
    }
    console.log(alumno)
    
    this.alumnosService.agregarAlumno(alumno);

    this._snackBar.open('Alumno agregado', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

    this.formularioAlumnos.reset();
  }

}
