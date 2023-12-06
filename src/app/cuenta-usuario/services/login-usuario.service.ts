import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

  private credenciales = [
    { usuario: 'usuario1', password: '123' },
    { usuario: 'usuario2', password: '123' },
    // Agrega más usuarios según sea necesario
  ];

  constructor( ) { }

  //Esta autenticacion  es usando NgModel
  authenticate(username: string, password: string): boolean {
    const usuarioEncontrado = this.credenciales.find(
      cred => cred.usuario === username && cred.password === password);
    
    return !!usuarioEncontrado;
  }


}
