import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpVerificationPage } from './sign-up-verification.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpVerificationPageRoutingModule {}
