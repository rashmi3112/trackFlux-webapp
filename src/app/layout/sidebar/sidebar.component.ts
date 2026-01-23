import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: '🏠', route:'/'},
    { label: 'All Tasks', icon: '📝', route:'/'},
    { label: 'Pending', icon: '⏳', route:'/'},
    { label: 'Completed', icon: '✅', route:'/'}
  ];
}
