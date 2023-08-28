import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeisPageRoutingModule } from './seis-routing.module';

import { SeisPage } from './seis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeisPageRoutingModule
  ],
  declarations: [SeisPage]
})
export class SeisPageModule {}
