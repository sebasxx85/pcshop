import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion-usuario',
  templateUrl: './cerrar-sesion-usuario.component.html',
  styleUrls: ['./cerrar-sesion-usuario.component.css']
})
export class CerrarSesionUsuarioComponent {


  constructor(private router: Router) { }


  ngOnInit() {
    // Redirige a inicio automaticamente
    setTimeout(() => {
      this.router.navigate(['']);
    }, 4000);
  }

}
