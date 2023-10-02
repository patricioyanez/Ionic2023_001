import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  constructor(private storage: Storage,
              private alert: AlertController) { }

  ngOnInit() {
    this.storage.create();
  }

  agregar()
  {
    //this.storage.set('1', 'Valor a guardar');
    // Ejercicio 1:
    // Validar que nombre no este vacio
    // enviar alert si está vacio.

    if(!this.id)
      this.mensajeError("Falta el Id");
    else if(!this.nombre)
      this.mensajeError("Falta nombre");
    else
    {
      this.storage.set(this.id, this.nombre);
      this.id = '';
      this.nombre = '';
    }
  }

  async mensajeError(mensaje: string)
  {
    const a = await this.alert.create({
      header    : 'Error',
      subHeader : 'Mensaje de error',
      message   : mensaje,
      buttons   : ['Aceptar']
    });
    a.present();  
  }
}
