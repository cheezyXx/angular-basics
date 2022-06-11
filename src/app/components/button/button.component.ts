import { Component } from '@angular/core';

export enum ButtonVariant {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  DANGER = "DANGER",
  SUCCESS = "SUCCESS",
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  variants = ["btn-primary", "btn-secondary", "btn-danger", "btn-success"];

}
