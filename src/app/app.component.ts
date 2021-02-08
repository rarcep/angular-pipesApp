import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre  : string = 'Romeo Arce';
  valor   : number = 1000;
  obj = {
    nombre: 'Romeo Arce'
  }

  mostrarNombre () {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
