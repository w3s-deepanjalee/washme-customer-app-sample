import { NgModule } from "@angular/core";
import { BackgroundComponent } from "./background/background.component";
import { FooterComponent } from "./footer/footer.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { OrderButtonsComponent } from "./order-buttons/order-buttons.component";
import { EmptyOrderComponent } from "./empty-order/empty-order.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { SingleOrderComponent } from "./single-order/single-order.component";


@NgModule({
  declarations: [BackgroundComponent, FooterComponent,AppHeaderComponent,OrderButtonsComponent,EmptyOrderComponent,OrderListComponent,SingleOrderComponent],
  exports: [BackgroundComponent,FooterComponent,AppHeaderComponent,OrderButtonsComponent,EmptyOrderComponent,OrderListComponent,SingleOrderComponent],
})
export class ComponentModule {}
