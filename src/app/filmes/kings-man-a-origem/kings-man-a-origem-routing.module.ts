import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KingsManAOrigemPage } from './kings-man-a-origem.page';

const routes: Routes = [
  {
    path: '',
    component: KingsManAOrigemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KingsManAOrigemPageRoutingModule {}
