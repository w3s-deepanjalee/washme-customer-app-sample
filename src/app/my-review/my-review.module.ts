import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyReviewPageRoutingModule } from './my-review-routing.module';

import { MyReviewPage } from './my-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyReviewPageRoutingModule
  ],
  declarations: [MyReviewPage]
})
export class MyReviewPageModule {}
