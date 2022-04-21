import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderTypeSelectPageRoutingModule } from './order-type-select-routing.module';
import { ComponentModule } from '../components/components.module'; 

import { OrderTypeSelectPage } from './order-type-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    OrderTypeSelectPageRoutingModule
  ],
  declarations: [OrderTypeSelectPage]
})
export class OrderTypeSelectPageModule {}
