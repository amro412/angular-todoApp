import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoListComponent,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() index!: number;
  constructor(public todoService: SharedService) {}

}
