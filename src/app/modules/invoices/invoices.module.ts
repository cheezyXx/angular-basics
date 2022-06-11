import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { InvoiceListComponent } from "./pages/invoice-list.component";

@NgModule({
  imports: [RouterModule],
  exports: [],
  declarations: [InvoiceListComponent],
  providers: [],
})
export class InvoicesModule {
}
