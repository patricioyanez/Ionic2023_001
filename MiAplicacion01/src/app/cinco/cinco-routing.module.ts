import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CincoPage } from './cinco.page';

const routes: Routes = [
  {
    path: '',
    component: CincoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CincoPageRoutingModule {}
