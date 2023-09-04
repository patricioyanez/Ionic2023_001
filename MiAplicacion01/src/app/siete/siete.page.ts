import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


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
  constructor(private toastController: ToastController) {
    this.apellidoPaterno = "Díaz";
   }

  ngOnInit() {
  }
  async sumar()
  {
    this.resultado=this.n1 + this.n2;
    const toast = await this.toastController.create({
      message   : 'El resultado es '+  this.resultado ,
      duration  : 3000,
      position  : 'middle', // top y bottom
    });
    await toast.present();
  }
  async limpiar()
  {
    this.resultado =this.n1 = this.n2 = '';
  }
}
