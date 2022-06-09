import { Component } from '@angular/core';

type Person = {
  name: string;
  balance: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people: Person[] = [
    {
      name: "Josef",
      balance: 500,
    },
    {
      name: "Ales ",
      balance: 5000,
    },
    {
      name: "Tomas",
      balance: -15000,
    },
    {
      name: "Aneta",
      balance: 2000,
    },
    {
      name: "Petra",
      balance: -1000,
    },
    {
      name: "Jiri",
      balance: 1400,
    },
  ];

  trackByFn(index: number) {
    return index;
  }
}
