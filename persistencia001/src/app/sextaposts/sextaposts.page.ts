import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../sexta/apirest.service';

@Component({
  selector: 'app-sextaposts',
  templateUrl: './sextaposts.page.html',
  styleUrls: ['./sextaposts.page.scss'],
})
export class SextapostsPage implements OnInit {
  posts :any = [];
  id : string = '';
  nombre : string = '';
  constructor(private activated: ActivatedRoute,
              private api: ApirestService) { 

  }

  ngOnInit() { 
      this.activated.paramMap.subscribe(p =>{
        this.id = p.get('id')??''; 
        this.nombre = p.get('nombre')??'no hay';
        this.api.getUserPosts(this.id);
      });
  }
  ionViewDidEnter()
  {
    this.posts = this.api.listado2;
  }

  // Ejercicio 17: desplegar los comentarios del post
  // seleccionado por el usuario
}
