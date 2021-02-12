import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Romeo';
  genero: string =  'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };
  clientes: string[] = ['Romeo','Pedro', 'Maria', 'Lupe', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'no tenemos un cliente esperando',
    '=2': 'no tenemos dos clientes esperando',
    'other': 'no tenemos # clientes esperando'
  };
  persona = {
    nombre: 'Romeo',
    edad: 39,
    direccion: 'Monterrey, MX'
  };
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, rejeact) => {
    setTimeout(() => {
      resolve('Tenemos dataa en la promesa')
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona() {
    this.nombre = 'Luisa';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }

}
