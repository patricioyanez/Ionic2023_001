import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SietePage } from './siete.page';

const routes: Routes = [
  {
    path: '',
    component: SietePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SietePageRoutingModule {}
