import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn = false;

  onLogin() {
    this.loggedIn = true;
  }

  onLogout() {
    this.loggedIn = false;
  }
}
