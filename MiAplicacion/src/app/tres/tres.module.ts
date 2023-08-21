import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TresPageRoutingModule } from './tres-routing.module';

import { TresPage } from './tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresPageRoutingModule
  ],
  declarations: [TresPage]
})
export class TresPageModule {}
