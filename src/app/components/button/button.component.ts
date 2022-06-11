import { Component, Input } from '@angular/core';

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

  @Input()
  variant = ButtonVariant.PRIMARY;

  variants = ["btn-primary", "btn-secondary", "btn-danger", "btn-success"];

  get _variant() {
    const currentVariant = this.variant.toLowerCase();
    const found = this.variants.find(variant => variant.includes(currentVariant));
    return found || this.variants[0];
  }

}
