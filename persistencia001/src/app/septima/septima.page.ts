import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-septima',
  templateUrl: './septima.page.html',
  styleUrls: ['./septima.page.scss'],
})
export class SeptimaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // metodos para testear
  sumar(n1:number, n2:number)
  {
    return n1+n2;
  }
  dividir(n1:number, n2:number)
  {
    if(n2 == 0)
      return -1;
    return n1/n2;
  }
  // crear 4 pruebas más
  // agregar metodos multiplicar y restar 
}
