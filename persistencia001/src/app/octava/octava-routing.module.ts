import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctavaPage } from './octava.page';

const routes: Routes = [
  {
    path: '',
    component: OctavaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OctavaPageRoutingModule {}
