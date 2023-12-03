import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAdmService {

  constructor() { }

  loginAdm(credentials: any) {
    console.log(credentials);

  }


}
