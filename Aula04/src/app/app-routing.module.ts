import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'parceria',
    loadChildren: () => import('./pages/parceiro/parceiro.module').then( m => m.ParceiroPageModule)
  },
  {
  path: 'redesocial',
  loadChildren: () => import('./pages/rede-socias/rede-socias.module').then( m => m.RedeSociasPageModule)
},

        // Caso a rota seja inválida.
  // Obs: tem que ser a ultima rota
  {
      path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },   
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
