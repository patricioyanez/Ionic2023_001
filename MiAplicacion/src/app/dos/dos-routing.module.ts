import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosPage } from './dos.page';

const routes: Routes = [
  {
    path: '',
    component: DosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DosPageRoutingModule {}
