import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TresPage } from './tres.page';

const routes: Routes = [
  {
    path: '',
    component: TresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TresPageRoutingModule {}
