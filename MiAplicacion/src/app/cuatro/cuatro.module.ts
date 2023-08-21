import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuatroPageRoutingModule } from './cuatro-routing.module';

import { CuatroPage } from './cuatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuatroPageRoutingModule
  ],
  declarations: [CuatroPage]
})
export class CuatroPageModule {}
