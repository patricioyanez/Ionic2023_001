import { Component, OnInit } from '@angular/core';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
})
export class SextaPage implements OnInit {
  usuarios : any = [];
  constructor(private api: ApirestService) { }

  ngOnInit() {
    this.listar();
  }
  async listar()
  {
    this.usuarios = await this.api.getUsers();
  }
}
