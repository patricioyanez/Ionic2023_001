import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnoPageRoutingModule } from './uno-routing.module';

import { UnoPage } from './uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnoPageRoutingModule
  ],
  declarations: [UnoPage]
})
export class UnoPageModule {}
