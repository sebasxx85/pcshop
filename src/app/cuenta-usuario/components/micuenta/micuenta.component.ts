import { Component } from '@angular/core';

@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent {

  tusDatos = [
    { id: 1, categoria: 'Categoria 1', producto: 'Producto 1',fecha: '2023-08-01' },
    { id: 2, categoria: 'Categoria 2', producto: 'Producto 2',fecha: '2023-10-01' },
    { id: 3, categoria: 'Categoria 3', producto: 'Producto 3',fecha: '2023-11-01' },
    { id: 4, categoria: 'Categoria 4', producto: 'Producto 4',fecha: '2023-09-01' },
    // Luego se recibiran las compras del usuario x api
  ];

}
