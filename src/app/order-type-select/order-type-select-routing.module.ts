import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTypeSelectPage } from './order-type-select.page';

const routes: Routes = [
  {
    path: '',
    component: OrderTypeSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTypeSelectPageRoutingModule {}
