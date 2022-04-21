import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { ComponentModule } from '../components/components.module'; 


import { Tab4Page } from './tab4.page';

@NgModule({
  imports: [
    CommonModule,
    ExploreContainerComponentModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ComponentModule,
  ],
  declarations: [Tab4Page],
})
export class Tab4PageModule {}
