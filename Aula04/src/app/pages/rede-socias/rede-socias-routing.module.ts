import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeSociasPage } from './rede-socias.page';

const routes: Routes = [
  {
    path: '',
    component: RedeSociasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeSociasPageRoutingModule {}
