import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ComponentModule } from '../components/components.module';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ComponentModule,
  ],
  providers: [Keyboard],
  declarations: [LoginPage],
})
export class LoginPageModule {}
