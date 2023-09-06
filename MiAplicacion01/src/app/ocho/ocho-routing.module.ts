import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OchoPage } from './ocho.page';

const routes: Routes = [
  {
    path: '',
    component: OchoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OchoPageRoutingModule {}
