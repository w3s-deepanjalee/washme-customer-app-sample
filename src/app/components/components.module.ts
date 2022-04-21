import { NgModule } from "@angular/core";
import { BackgroundComponent } from "./background/background.component";
import { FooterComponent } from "./footer/footer.component";
import { AppHeaderComponent } from "./app-header/app-header.component";

@NgModule({
  declarations: [BackgroundComponent, FooterComponent,AppHeaderComponent],
  exports: [BackgroundComponent,FooterComponent,AppHeaderComponent],
})
export class ComponentModule {}
