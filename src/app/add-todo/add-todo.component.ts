import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() saveTodo = new EventEmitter<any>();
  newTodo = { text: '' }

  constructor() { }

  ngOnInit(): void {

  }
  handleSave() {
    this.saveTodo.emit(this.newTodo);
    console.log(this.newTodo)
  }

}
