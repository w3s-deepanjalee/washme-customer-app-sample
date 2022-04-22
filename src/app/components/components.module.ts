import { NgModule } from "@angular/core";
import { BackgroundComponent } from "./background/background.component";
import { FooterComponent } from "./footer/footer.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { OrderButtonsComponent } from "./order-buttons/order-buttons.component";
import { EmptyOrderComponent } from "./empty-order/empty-order.component";


@NgModule({
  declarations: [BackgroundComponent, FooterComponent,AppHeaderComponent,OrderButtonsComponent,EmptyOrderComponent],
  exports: [BackgroundComponent,FooterComponent,AppHeaderComponent,OrderButtonsComponent,EmptyOrderComponent],
})
export class ComponentModule {}
