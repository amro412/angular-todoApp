import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  tasks: any[] = [];

  addTask(creatorName: string) {
    const taskName = `Task${this.tasks.length + 1}`;
    const currentDate = new Date().toLocaleDateString();
    this.tasks.push({
      taskName,
      creatorName,
      creationDate: currentDate
    });
  }
}