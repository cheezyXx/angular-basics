import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  food = ["Potato", "Strawberry", "Chocolate", "Meat", "Fish"];

  trackByFn(_: number, food: string) {
    return food;
  }
}
