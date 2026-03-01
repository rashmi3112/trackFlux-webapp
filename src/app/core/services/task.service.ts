import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // private http = inject(HttpClient);
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://localhost:7111/api/Task'; 

  //get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  //update task
  updateTask(id: number,task: any) {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  //createTask
  createTask(task: Omit<Task, 'id' | 'createdAt'>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  //delete task
  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }
}
