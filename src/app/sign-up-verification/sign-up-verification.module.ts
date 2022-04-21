import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpVerificationPageRoutingModule } from './sign-up-verification-routing.module';
import { ComponentModule } from '../components/components.module';


import { SignUpVerificationPage } from './sign-up-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    SignUpVerificationPageRoutingModule
  ],
  declarations: [SignUpVerificationPage]
})
export class SignUpVerificationPageModule {}
