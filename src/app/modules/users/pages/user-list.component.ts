import { Component } from '@angular/core';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  users = [
    {
      id: "xxx",
      firstName: "Tomas",
      lastName: "Svojanovsky",
      birthday: new Date(1998, 5, 6).toISOString(),
    },
    {
      id: "yyy",
      firstName: "Jozka",
      lastName: "Kukuricudus",
      birthday: new Date(1992, 5, 1).toISOString(),
    },
  ];
}
