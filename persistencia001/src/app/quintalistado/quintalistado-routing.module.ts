import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintalistadoPage } from './quintalistado.page';

const routes: Routes = [
  {
    path: '',
    component: QuintalistadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintalistadoPageRoutingModule {}
