import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderSummeryPageRoutingModule } from './order-summery-routing.module';
import { ComponentModule } from '../components/components.module'; 

import { OrderSummeryPage } from './order-summery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    OrderSummeryPageRoutingModule
  ],
  declarations: [OrderSummeryPage]
})
export class OrderSummeryPageModule {}
