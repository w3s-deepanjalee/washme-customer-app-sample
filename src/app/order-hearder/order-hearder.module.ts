import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHearderPageRoutingModule } from './order-hearder-routing.module';

import { OrderHearderPage } from './order-hearder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHearderPageRoutingModule
  ],
  declarations: [OrderHearderPage]
})
export class OrderHearderPageModule {}
