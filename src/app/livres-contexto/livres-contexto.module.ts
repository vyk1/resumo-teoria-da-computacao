import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivresContextoPageRoutingModule } from './livres-contexto-routing.module';

import { LivresContextoPage } from './livres-contexto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivresContextoPageRoutingModule
  ],
  declarations: [LivresContextoPage]
})
export class LivresContextoPageModule {}
