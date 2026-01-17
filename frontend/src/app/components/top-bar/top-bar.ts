import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning';
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-bar.html',
  styleUrls: ['./top-bar.scss'],
})
export class TopBar implements OnInit {
  user: User | null = null;
  currentTime: string = '';
  currentDate: string = '';
  showNotifications = false;
  showUserMenu = false;
  searchQuery = '';

  notifications: Notification[] = [
    {
      id: 1,
      title: 'Project Updated',
      message: 'Your portfolio project was successfully updated',
      time: '5m ago',
      read: false,
      type: 'success',
    },
    {
      id: 2,
      title: 'New Experience Added',
      message: 'Experience entry has been added to your profile',
      time: '1h ago',
      read: false,
      type: 'info',
    },
    {
      id: 3,
      title: 'Profile Incomplete',
      message: 'Add more skills to complete your profile',
      time: '2h ago',
      read: true,
      type: 'warning',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadUser();
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  loadUser(): void {
    // Replace with actual AuthService call
    this.user = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    this.currentDate = now.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    this.showUserMenu = false;
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifications = false;
  }

  markAsRead(notificationId: number): void {
    const notification = this.notifications.find((n) => n.id === notificationId);
    if (notification) {
      notification.read = true;
    }
  }

  markAllAsRead(): void {
    this.notifications.forEach((n) => (n.read = true));
  }

  get unreadCount(): number {
    return this.notifications.filter((n) => !n.read).length;
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Implement search logic here
    }
  }

  navigateToProfile(): void {
    this.showUserMenu = false;
    this.router.navigate(['/dashboard/profile']);
  }

  navigateToSettings(): void {
    this.showUserMenu = false;
    this.router.navigate(['/dashboard/settings']);
  }

  logout(): void {
    this.showUserMenu = false;
    // Implement actual logout with AuthService
    this.router.navigate(['/login']);
  }

  closeDropdowns(): void {
    this.showNotifications = false;
    this.showUserMenu = false;
  }
}
