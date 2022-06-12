import { Component } from '@angular/core';
import { v4 as uuid } from "uuid";

type Todo = {
  id: string;
  name: string;
  done: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [];

  newTodo: Todo = this.createDefaultTodo();

  onKeyUp(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;
    this.newTodo = {
      ...this.newTodo,
      name: value,
    };
  }

  onDone(oldTodo: Todo) {
    this.todos = this.todos.map(todo => {
      if (oldTodo.id === todo.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });
  }

  onClick() {
    this.todos = [...this.todos, this.newTodo];
    this.newTodo = this.createDefaultTodo();
  }

  createDefaultTodo() {
    return {
      name: "",
      done: false,
      id: uuid(),
    }
  }

}
