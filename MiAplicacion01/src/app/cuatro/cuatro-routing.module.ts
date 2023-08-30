import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuatroPage } from './cuatro.page';

const routes: Routes = [
  {
    path: '',
    component: CuatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuatroPageRoutingModule {}
