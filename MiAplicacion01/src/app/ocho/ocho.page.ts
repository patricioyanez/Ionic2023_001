import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  n1 = '';
  n2 = '';
  resultado : any;
  constructor(private toastController : ToastController) { }

  ngOnInit() {
  }
  sumar()
  {
    this.resultado = this.n1 + this.n2;
  }
  restar()
  {
    this.resultado = Number(this.n1) - Number(this.n2);
  }
  multiplicar()
  {
    this.resultado = Number(this.n1) * Number(this.n2);
  }
  async dividir()
  {
    if(Number(this.n2) != 0)
      this.resultado = Number(this.n1) / Number(this.n2);
    else
    {
      const toast = await this.toastController.create({
        message:'No se puede dividir por cero' ,
        duration: 3000,
        position:"middle", // top, middle
        color : "danger",
      });
      await toast.present();
    }
  }
}
