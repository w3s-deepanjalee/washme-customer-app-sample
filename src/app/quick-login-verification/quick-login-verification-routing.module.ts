import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickLoginVerificationPage } from './quick-login-verification.page';

const routes: Routes = [
  {
    path: '',
    component: QuickLoginVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickLoginVerificationPageRoutingModule {}
