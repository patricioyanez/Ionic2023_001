import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-octava',
  templateUrl: './octava.page.html',
  styleUrls: ['./octava.page.scss'],
})
export class OctavaPage implements OnInit {
  n1: number = 0;
  n2: number = 0;
  res: number = 0;
  constructor() { }

  ngOnInit() {
  }
  sumar()
  {
    this.res = this.n1 + this.n2;
  }

}
