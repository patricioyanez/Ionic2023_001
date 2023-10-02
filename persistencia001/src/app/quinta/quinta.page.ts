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
    await this.crud.guardar(this.persona.rut, this.persona);
  }
}
