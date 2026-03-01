import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { Observable } from 'rxjs';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ CommonModule, AsyncPipe ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(){
    this.loadTasks();
  }

  loadTasks() {
    this.tasks$ = this.taskService.getTasks();
    // console.log("Task:", this.tasks$)
  }

  toggle(task: Task) {
    const updatedTask = { 
      title: task.title,
      description: task.description,
      priority: task.priority,
      dueDate: task.dueDate,
      categoryId: task.categoryId,
      isCompleted: !task.isCompleted
    };
    this.taskService.updateTask(task.id, updatedTask).subscribe({
      next: () => task.isCompleted = !task.isCompleted,
      error: err => console.error(err)
      // this.loadTasks(); //reload list after update
    })
  }
}
