import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./modules/users/pages/user-list.component";
import { InvoiceListComponent } from "./modules/invoices/pages/invoice-list.component";
import { LayoutContainerComponent } from "./modules/shared/containers/layout-container.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutContainerComponent,
    children: [
      {
        path: "users",
        component: UserListComponent,
      },
      {
        path: "users/:id/invoices",
        component: InvoiceListComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/users",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
