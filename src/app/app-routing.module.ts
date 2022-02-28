import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'liga-da-justica',
    loadChildren: () => import('./filmes/liga-da-justica/liga-da-justica.module').then( m => m.LigaDaJusticaPageModule)
  },
  {
    path: 'kings-man-a-origem',
    loadChildren: () => import('./filmes/kings-man-a-origem/kings-man-a-origem.module').then( m => m.KingsManAOrigemPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
