import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoData = [
    {
      text: "Wash Car"
      // isDone: "No"
    },
    {
      text: "Buy Groceries"
      // isDone: "No"
    }


  ]
  handleSave(data: any) {
    this.todoData.push(data)
  }
}
