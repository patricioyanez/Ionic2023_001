import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  // string, number, boolean y any
  nombre = 'Juan';
  apellidoPaterno : string;
  apellidoMaterno : string = "Fuentes";

  n1 = '';
  n2 = '';
  resultado : any = '';
  constructor() {
    this.apellidoPaterno = "Díaz";
   }

  ngOnInit() {
  }
  async sumar()
  {
    this.resultado=this.n1 + this.n2;
  }
  async limpiar()
  {
    this.resultado =this.n1 = this.n2 = '';
  }
}
