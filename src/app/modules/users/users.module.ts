import { NgModule } from '@angular/core';

import { UserListComponent } from "./pages/user-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [UserListComponent],
  providers: [],
})
export class UsersModule {
}
