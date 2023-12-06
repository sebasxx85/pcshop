import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuarioService } from '../../services/login-usuario.service';

@Component({
  selector: 'app-inicio-usuario',
  templateUrl: './inicio-usuario.component.html',
  styleUrls: ['./inicio-usuario.component.css']
})
export class InicioUsuarioComponent {

  // inicioUsuario!: FormGroup

  //Obtener datos desde NgModel
  usuarioNg: string = ''
  passwordNg: string = ''

  constructor(
    private loginServ: LoginUsuarioService,
    private router: Router,
    
    ) {}

  loginUsu() {
    if (this.usuarioNg != '' && this.passwordNg != '') {
      console.log("ingreso correcto");

      const usuarioEncontrado = 
      this.loginServ.authenticate(this.usuarioNg, this.passwordNg)

      if (usuarioEncontrado) {
        console.log("ingreso correcto2");
        this.router.navigateByUrl('usuario/mi-cuenta');

      } else {
        alert("ingreso Incorrecto");
      }

    }

  }

}


