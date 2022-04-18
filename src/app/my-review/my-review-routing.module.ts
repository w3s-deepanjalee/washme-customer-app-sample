import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyReviewPage } from './my-review.page';

const routes: Routes = [
  {
    path: '',
    component: MyReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyReviewPageRoutingModule {}
