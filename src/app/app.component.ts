import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private formBuilder: NonNullableFormBuilder) {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
