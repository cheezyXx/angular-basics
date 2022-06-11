import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { UserListComponent } from "./pages/user-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  declarations: [UserListComponent],
  providers: [],
})
export class UsersModule {
}
