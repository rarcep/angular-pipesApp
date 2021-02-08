import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas : number = 2568758.5567;
  porcentaje  : number = 0.48;

  constructor() { }

  ngOnInit(): void {
  }

}
