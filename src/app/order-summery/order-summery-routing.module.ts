import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSummeryPage } from './order-summery.page';

const routes: Routes = [
  {
    path: '',
    component: OrderSummeryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderSummeryPageRoutingModule {}
