import { Component } from '@angular/core';
import { ButtonVariant } from "./components/button/button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  buttonsVariants = ButtonVariant;

  onClick(message: string) {
    console.log(message);
  }
}
