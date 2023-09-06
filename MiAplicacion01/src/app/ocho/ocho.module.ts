import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OchoPageRoutingModule } from './ocho-routing.module';

import { OchoPage } from './ocho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OchoPageRoutingModule
  ],
  declarations: [OchoPage]
})
export class OchoPageModule {}
