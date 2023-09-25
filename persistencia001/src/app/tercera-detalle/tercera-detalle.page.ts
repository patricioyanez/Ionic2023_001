import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tercera-detalle',
  templateUrl: './tercera-detalle.page.html',
  styleUrls: ['./tercera-detalle.page.scss'],
})
export class TerceraDetallePage implements OnInit {

  personas = [
    {
      id    : 1,
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
    },
    {
      id    : 2,
      nombre: 'Diana',
      edad  : 30,
      foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

    },
    {
      id    : 3,
      nombre: 'Pedro',
      edad  : 45,
      foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

    }
  ]
  persona : any;
  constructor(private activated:ActivatedRoute,
              private toastController: ToastController,
              private alertController: AlertController
              ) { }

  ngOnInit() {
    // Ejercicio 1: Capturar el valor del idUsuario
    this.activated.paramMap.subscribe(p =>{
      const id = Number(p.get('idUsuario'));
      this.persona = this.personas.find(x=> {return x.id == id});
    });
    // Ejercicio 2: Mostrar los datos del usuario usando card
  }
  
  async si()
  {
      const toast = await this.toastController.create({
        message: 'Te agrado esta persona',
        icon: 'checkmark-circle-outline',
        duration: 2000
      });
      toast.present();
  }
  async no()
  {
      const alert = await this.alertController.create({
        header: 'Atención',
        subHeader: 'Mensaje importante',
        message: 'No te agrado esta persona.',
        buttons: ['Aceptar']
      });
    
      await alert.present();
  }

}
