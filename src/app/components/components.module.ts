import { NgModule } from "@angular/core";
import { BackgroundComponent } from "./background/background.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [BackgroundComponent, FooterComponent],
  exports: [BackgroundComponent,FooterComponent],
})
export class ComponentModule {}
