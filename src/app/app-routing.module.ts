import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'regulares',
    loadChildren: () => import('./regulares/regulares.module').then(m => m.RegularesPageModule)
  },
  {
    path: 'livres-contexto',
    loadChildren: () => import('./livres-contexto/livres-contexto.module').then( m => m.LivresContextoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
