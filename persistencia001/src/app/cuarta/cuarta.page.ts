import { Component, OnInit } from '@angular/core';
// instalar npm install @ionic/storage-angular
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string = '';
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

  agregar()
  {
    //this.storage.set('1', 'Valor a guardar');
    this.storage.set(this.id, this.nombre);
    // Ejercicio 1:
    // Validar que nombre no este vacio
    // enviar alert si está vacio.
    this.id = '';
    this.nombre = '';
  }
}
