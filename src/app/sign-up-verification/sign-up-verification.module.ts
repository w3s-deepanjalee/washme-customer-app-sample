import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpVerificationPageRoutingModule } from './sign-up-verification-routing.module';

import { SignUpVerificationPage } from './sign-up-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpVerificationPageRoutingModule
  ],
  declarations: [SignUpVerificationPage]
})
export class SignUpVerificationPageModule {}
