import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

  private usuarios = [
    { usuario: 'usuario1', password: '123' },
    { usuario: 'usuario2', password: '123' },
    // Agrega más usuarios según sea necesario
  ];

  constructor( ) { }

  authenticate(username: string, password: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      user => user.usuario === username && user.password === password);
    
    return !!usuarioEncontrado;
  }
}
