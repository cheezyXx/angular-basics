import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  outClick: EventEmitter<string> = new EventEmitter<string>();

  variants = ["btn-primary", "btn-secondary", "btn-danger", "btn-success"];

  get _variant() {
    const currentVariant = this.variant.toLowerCase();
    const found = this.variants.find(variant => variant.includes(currentVariant));
    return found || this.variants[0];
  }

  onClick() {
    this.outClick.emit("Nice, I sent something outside");
  }
}
