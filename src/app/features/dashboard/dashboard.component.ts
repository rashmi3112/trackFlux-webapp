import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { label: 'Total Tasks', value: 12, icon: '📝'},
    { label: 'Completed', value: 5, icon: '✅'},
    { label: 'Pending', value: 7, icon: '⏳'}
  ]
}
