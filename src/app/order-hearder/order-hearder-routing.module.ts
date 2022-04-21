import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderHearderPage } from './order-hearder.page';

const routes: Routes = [
  {
    path: '',
    component: OrderHearderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderHearderPageRoutingModule {}
