import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginAdmService } from '../../services/login-adm.service';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent {

  inicioAdmin!: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private loginServ: LoginAdmService
  )

  { }

  ngOnInit() {
    this.inicioAdmin = this.formBuilder.group({
          usuario: new FormControl('',[]),
          password: new FormControl('', []),
    });
  }

  get Usuario(){
    return this.inicioAdmin.get('usuario')?.value
  }

  get Pass(){
    return this.inicioAdmin.get('password')?.value
  }

 //Aca tengo que comunicar con controlador nav para que me muestre la barra usuario, usar rxjs
  loginAdm(){
    
    if (this.inicioAdmin.valid) {
      alert("Ingreso exitoso");
      alert(this.Usuario);

      this.loginServ.loginAdm(this.inicioAdmin.value)
      this.router.navigateByUrl('dashboard')

      //Resetear datos formulario
      this.inicioAdmin.reset()
      
    } else {
      alert('datos no validos');
      this.router.navigateByUrl('admin-login')
      
    }
  }

}
