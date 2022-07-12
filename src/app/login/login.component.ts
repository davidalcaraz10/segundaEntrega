import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  carga = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'david' && password == 'david'){
      this.inicioPrueba();
    } else{
        this.error();
        this.form.reset(); 
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña incorrectos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  inicioPrueba() {
    this.carga = true;
    setTimeout(() => {

      this.router.navigate(['dashboard'])
    }, 1500);
  }

}
