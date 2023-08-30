import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnoPage } from './uno.page';

const routes: Routes = [
  {
    path: '',
    component: UnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnoPageRoutingModule {}
