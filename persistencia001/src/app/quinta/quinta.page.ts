import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona: any = [];
  constructor(private crud: CrudService,
    private toast: ToastController,
    private router: Router) { }

  ngOnInit() {
  }
  async agregar()
  {
    // Ejercicio 2: Validar todos los datos  antes de guardar
    // usar TOAST rojo error y verde guardado.
    if(!this.persona.rut)
      this.mensajeError('Falta rut');
    else if(!this.persona.nombre)
      this.mensajeError('Falta nombre');
    else if(!this.persona.direccion)
      this.mensajeError('Falta Dirección');
    else if(!this.persona.correo)
      this.mensajeError('Falta Correo');
    else if(!this.persona.telefono)
      this.mensajeError('Falta teléfono');
    else if(!this.persona.anioNacimiento)
      this.mensajeError('Falta Año Nacimiento');
    else
    {
      await this.crud.guardar(this.persona.rut, this.persona);
      this.mensajeExito('Datos guardados');
      this.persona = [];
    }

    // Ejercicio 3: Terminar el crud para los datos de persona
  }
  listar()
  {
    this.router.navigateByUrl('quintalistado');
  }
  limpiar()
  {
    this.persona = [];
  }
  async mensajeError(mensaje: string)
  {
    const x = await this.toast.create({
      message   : mensaje,
      color     : 'danger',
      icon      : 'alert-circle-outline',
      duration  : 3000,
      buttons   : ['Aceptar']
    });
    x.present();
  }
  async mensajeExito(mensaje: string)
  {
    const x = await this.toast.create({
      message   : mensaje,
      color     : 'success',
      icon      : 'checkmark-circle-outline',
      duration  : 3000,
      buttons   : ['Aceptar']
    })
    x.present();
  }
}
