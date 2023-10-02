import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona: any = [];
  constructor(private crud: CrudService) { }

  ngOnInit() {
  }
  async agregar()
  {
    // Ejercicio 2: Validar todos los datos  antes de guardar
    // usar TOAST rojo error y verde guardado.
    await this.crud.guardar(this.persona.rut, this.persona);

    // Ejercicio 3: Terminar el crud para los datos de persona
  }
}
