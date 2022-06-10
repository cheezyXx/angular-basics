import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn = false;

  onLogOut() {
    this.loggedIn = false;
  }

  onLogin() {
    this.loggedIn = true;
  }
}
