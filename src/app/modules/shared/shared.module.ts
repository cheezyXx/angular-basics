import { NgModule } from '@angular/core';

import { LayoutContainerComponent } from "./containers/layout-container.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [LayoutContainerComponent],
  declarations: [LayoutContainerComponent],
  providers: [],
})
export class SharedModule {
}
