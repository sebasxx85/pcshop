import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAdmService {

  private credenciales = [
    { administrador: 'administrador1', password: '123' },
    { administrador: 'administrador2', password: '123' },
    // Agrega más usuarios según sea necesario
  ];

  constructor() { }

  loginAdm(credentials: any) {
    console.log(credentials);

  }

  //Esta autenticacion  es usando F Reactivos
  authenticate(username: string, password: string): boolean {
    const usuarioEncontrado = this.credenciales.find(
      cred => cred.administrador === username && cred.password === password);
    
    return !!usuarioEncontrado;
  }


}
