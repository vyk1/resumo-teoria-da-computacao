import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivresContextoPage } from './livres-contexto.page';

const routes: Routes = [
  {
    path: '',
    component: LivresContextoPage
  },
  {
    path: 'gramaticas',
    loadChildren: () => import('./gramaticas/gramaticas.module').then( m => m.GramaticasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivresContextoPageRoutingModule {}
