import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarComponent implements OnInit {
  user: User | null = null;
  isCollapsed = false;
  activeSection = 'profile';

  menuItems = [
    {
      id: 'profile',
      icon: '👤',
      label: 'Profile',
      route: '/dashboard/profile',
      command: 'profile.view',
    },
    {
      id: 'projects',
      icon: '💼',
      label: 'Projects',
      route: '/dashboard/projects',
      command: 'projects.list',
    },
    {
      id: 'experience',
      icon: '🎯',
      label: 'Experience',
      route: '/dashboard/experience',
      command: 'experience.list',
    },
    {
      id: 'skills',
      icon: '⚡',
      label: 'Skills',
      route: '/dashboard/skills',
      command: 'skills.view',
    },
  ];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    // Replace with actual AuthService call
    // Example: this.authService.getUser().subscribe(user => this.user = user);
    this.user = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  setActiveSection(sectionId: string): void {
    this.activeSection = sectionId;
  }

  logout(): void {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

    this.http
      .post(
        'http://127.0.0.1:8000/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .subscribe({
        next: () => {
          // Clear auth data
          localStorage.removeItem('authToken');
          sessionStorage.removeItem('authToken');

          this.user = null;

          // Redirect to login
          this.router.navigate(['/login']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Logout failed:', error);

          // Even if API fails, force logout on frontend
          localStorage.removeItem('authToken');
          sessionStorage.removeItem('authToken');
          this.router.navigate(['/login']);
        },
      });
  }
}
