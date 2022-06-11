import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: string[] = [];

  newTodo = "";

  onKeyUp(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;
    this.newTodo = value;
  }

  onClick() {
    this.todos = [...this.todos, this.newTodo];
    this.newTodo = "";
  }
}
