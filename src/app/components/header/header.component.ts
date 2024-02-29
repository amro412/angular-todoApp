import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  creatorName: string = '';
  constructor(private todoService: SharedService) {}
  @Output() addTodo = new EventEmitter<string>();

  onAdd() {
    if (this.creatorName.trim() !== '') {
      this.todoService.addTask(this.creatorName);
      this.creatorName = ''; 
    }
  }
 

 

}


