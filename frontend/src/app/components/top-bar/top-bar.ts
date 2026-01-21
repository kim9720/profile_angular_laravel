import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
export class TopBar implements OnInit, OnDestroy {
  user: User | null = null;

  currentTime = '';
  currentDate = '';

  showNotifications = false;
  showUserMenu = false;
  searchQuery = '';

  private timer: any;

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

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUser();
    this.updateTime();

    this.timer = setInterval(() => {
      this.updateTime();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  loadUser(): void {
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

    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');

    this.router.navigate(['/login']);
  }

  closeDropdowns(): void {
    this.showNotifications = false;
    this.showUserMenu = false;
  }
}
