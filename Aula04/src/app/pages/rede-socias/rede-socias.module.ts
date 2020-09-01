import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeSociasPageRoutingModule } from './rede-socias-routing.module';

import { RedeSociasPage } from './rede-socias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeSociasPageRoutingModule
  ],
  declarations: [RedeSociasPage]
})
export class RedeSociasPageModule {}
