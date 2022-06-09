import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "";

  onKeyDown(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;
    this.name = value;
  }
}
