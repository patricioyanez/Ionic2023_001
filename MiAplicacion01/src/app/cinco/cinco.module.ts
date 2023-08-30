import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CincoPageRoutingModule } from './cinco-routing.module';

import { CincoPage } from './cinco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CincoPageRoutingModule
  ],
  declarations: [CincoPage]
})
export class CincoPageModule {}
