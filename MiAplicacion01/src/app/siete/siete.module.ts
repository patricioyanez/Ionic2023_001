import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SietePageRoutingModule } from './siete-routing.module';

import { SietePage } from './siete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SietePageRoutingModule
  ],
  declarations: [SietePage]
})
export class SietePageModule {}
