import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickLoginVerificationPageRoutingModule } from './quick-login-verification-routing.module';

import { QuickLoginVerificationPage } from './quick-login-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickLoginVerificationPageRoutingModule
  ],
  declarations: [QuickLoginVerificationPage]
})
export class QuickLoginVerificationPageModule {}
