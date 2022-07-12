import { Injectable } from '@angular/core';

import { Alumnos } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnosData: Alumnos[] = [
    {nombre: 'David', apellido: 'Alcaraz', email: 'daal_777@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'Ruben', apellido: 'Mendes', email: 'ruben12@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'María', apellido: 'Gimenez', email: 'maria72@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'Pablo', apellido: 'Gonzalez', email: 'pablo82@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'José', apellido: 'Suarez', email: 'jose76@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'Julián', apellido: 'Lopez', email: 'julian19@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'Andrea', apellido: 'Espejo', email: 'andrea94@hotmail.com', clase: 123456, curso: 'Angular'},
    {nombre: 'Carolina', apellido: 'Silva', email: 'caro17@hotmail.com', clase: 123456, curso: 'Angular'},
  ];

  constructor() { }

  getAlumno(){
      return this.alumnosData.slice();
  }

  agregarAlumno(alumno : Alumnos){
    this.alumnosData.unshift(alumno);
  }

  eliminarAlumnos(index: number) {
    this.alumnosData.splice(index, 1);
  }

}


