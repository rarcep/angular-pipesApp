import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  ordenarPor: string  = 'sin valor';
  orden: string  = 'asc';
  enMayuscula: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.rojo
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleMayuscula(){
    this.enMayuscula = !this.enMayuscula;
  }

  ordenar(valor: string) {
    console.log(valor);
    this.orden = (this.orden === 'des') ? 'asc' : 'des';
    this.ordenarPor = valor;
  }

}
