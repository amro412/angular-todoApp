import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,FormsModule,TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  constructor(public todoService: SharedService) {}
  @Input() index!: number;
  @Output() completeTodo = new EventEmitter<any>();
  @Output() editTodo = new EventEmitter<any>();
  @Output() deleteTodo = new EventEmitter<any>();

  get task() {
    return this.todoService.tasks[this.index];
  }

  onComplete() {
    this.task.completed = !this.task.completed;
  }

  onEdit() {
    if (this.task.editMode) {
      this.task.editMode = false;
    } else {
      this.task.editMode = true;
    }
  }

  onDelete() {
    this.todoService.tasks.splice(this.index, 1);
  }

  get editMode() {
    return this.task.editMode;
  }

}
