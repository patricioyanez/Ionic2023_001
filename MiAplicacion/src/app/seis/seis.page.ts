import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  nombre  : string;
  edad    : number;
  mensaje : string = "Usuario Premium";

  asignaturas = [
    {nombre:"Base de datos" , nota:39.55},
    {nombre:"Programación"  , nota:45},
    {nombre:"Matématica"    , nota:33},
  ]


  constructor() { 
    this.nombre = "Juan Pérez";
    this.edad = 30;
    console.log(this.asignaturas);
    console.table(this.asignaturas);

  }

  ngOnInit() {
  }

}
