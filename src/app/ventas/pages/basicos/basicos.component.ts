import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower     : string = 'romeo';
  nombreUpper     : string = 'ROMEO';
  nombreCompleto  : string = 'roMeO aRcE';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
