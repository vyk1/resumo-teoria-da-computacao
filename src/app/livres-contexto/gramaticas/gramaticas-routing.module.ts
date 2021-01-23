import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GramaticasPage } from './gramaticas.page';

const routes: Routes = [
  {
    path: '',
    component: GramaticasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GramaticasPageRoutingModule {}
