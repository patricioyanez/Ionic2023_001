import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintalistadoPageRoutingModule } from './quintalistado-routing.module';

import { QuintalistadoPage } from './quintalistado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintalistadoPageRoutingModule
  ],
  declarations: [QuintalistadoPage]
})
export class QuintalistadoPageModule {}
