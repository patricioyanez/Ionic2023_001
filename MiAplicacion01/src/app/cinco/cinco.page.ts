import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  public alertButtons = ['Aceptalo'];
  numero : number;
  numero2: number = 100;

  constructor(private alertController: AlertController) {
    this.numero = 0;
   }

  ngOnInit() {
  }
// type script
  async alerta(){
    const alert = await this.alertController.create({
      header    : 'Alerta usando AlertController',
      subHeader : 'SubTitulo',
      message   : "Ejemplo de mensaje de alerta usando la clase AlertController",
      buttons   : ['Ok'],      
    });
    // visualizar la alerta
    await alert.present();
  }

  async incrementar()
  {
    this.numero += 1;
  }
}
