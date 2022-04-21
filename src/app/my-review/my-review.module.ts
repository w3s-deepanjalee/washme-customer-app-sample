import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyReviewPageRoutingModule } from './my-review-routing.module';
import { ComponentModule } from '../components/components.module'; 

import { MyReviewPage } from './my-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MyReviewPageRoutingModule
  ],
  declarations: [MyReviewPage]
})
export class MyReviewPageModule {}
