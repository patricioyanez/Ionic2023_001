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
  constructor(private activated: ActivatedRoute,
              private api: ApirestService) { }

  ngOnInit() {
    this.listar();
    this.listar();
    
  }
  async listar()
  {
    this.activated.paramMap.subscribe(p =>{
      const id = p.get('id')??'';
      this.posts = this.api.getUserPosts(id).then(x => {this.posts = x});
    });
    
  }
}
