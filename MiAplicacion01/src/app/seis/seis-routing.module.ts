import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeisPage } from './seis.page';

const routes: Routes = [
  {
    path: '',
    component: SeisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeisPageRoutingModule {}
