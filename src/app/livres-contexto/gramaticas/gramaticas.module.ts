import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GramaticasPageRoutingModule } from './gramaticas-routing.module';

import { GramaticasPage } from './gramaticas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GramaticasPageRoutingModule
  ],
  declarations: [GramaticasPage]
})
export class GramaticasPageModule {}
