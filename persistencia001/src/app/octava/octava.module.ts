import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OctavaPageRoutingModule } from './octava-routing.module';

import { OctavaPage } from './octava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OctavaPageRoutingModule
  ],
  declarations: [OctavaPage]
})
export class OctavaPageModule {}
