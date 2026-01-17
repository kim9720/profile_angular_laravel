import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface StatCard {
  id: string;
  icon: string;
  label: string;
  value: number;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  command: string;
}

interface RecentActivity {
  id: number;
  type: 'project' | 'experience' | 'skill';
  action: string;
  title: string;
  timestamp: string;
  icon: string;
}

interface QuickAction {
  id: string;
  icon: string;
  label: string;
  description: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  userName = 'John';
  greeting = '';

  stats: StatCard[] = [
    {
      id: 'projects',
      icon: '💼',
      label: 'Total Projects',
      value: 12,
      change: 2,
      changeType: 'positive',
      command: 'projects.count'
    },
    {
      id: 'experiences',
      icon: '🎯',
      label: 'Experiences',
      value: 8,
      change: 1,
      changeType: 'positive',
      command: 'exp.count'
    },
    {
      id: 'skills',
      icon: '⚡',
      label: 'Skills',
      value: 24,
      change: 3,
      changeType: 'positive',
      command: 'skills.count'
    },
    {
      id: 'completion',
      icon: '📊',
      label: 'Profile Complete',
      value: 85,
      change: 5,
      changeType: 'positive',
      command: 'profile.status'
    }
  ];

  quickActions: QuickAction[] = [
    {
      id: 'new-project',
      icon: '➕',
      label: 'Add Project',
      description: 'Create a new project',
      route: '/dashboard/projects/new',
      color: '#00ff88'
    },
    {
      id: 'new-experience',
      icon: '🎓',
      label: 'Add Experience',
      description: 'Add work experience',
      route: '/dashboard/experience/new',
      color: '#0088ff'
    },
    {
      id: 'update-skills',
      icon: '⚙️',
      label: 'Update Skills',
      description: 'Manage your skills',
      route: '/dashboard/skills',
      color: '#ffaa00'
    },
    {
      id: 'view-profile',
      icon: '👁️',
      label: 'View Profile',
      description: 'Preview your profile',
      route: '/dashboard/profile',
      color: '#ff0088'
    }
  ];

  recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: 'project',
      action: 'Updated',
      title: 'E-commerce Platform',
      timestamp: '2 hours ago',
      icon: '💼'
    },
    {
      id: 2,
      type: 'experience',
      action: 'Added',
      title: 'Senior Developer at TechCorp',
      timestamp: '5 hours ago',
      icon: '🎯'
    },
    {
      id: 3,
      type: 'skill',
      action: 'Added',
      title: 'React, TypeScript, Node.js',
      timestamp: '1 day ago',
      icon: '⚡'
    },
    {
      id: 4,
      type: 'project',
      action: 'Created',
      title: 'Portfolio Website',
      timestamp: '2 days ago',
      icon: '💼'
    }
  ];

  profileTips = [
    'Add more projects to showcase your work',
    'Complete your experience section',
    'Add a professional bio to your profile'
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setGreeting();
    this.loadDashboardData();
  }

  setGreeting(): void {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.greeting = 'Good morning';
    } else if (hour < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }
  }

  loadDashboardData(): void {
    // Replace with actual API calls to fetch dashboard data
    // Example:
    // this.dashboardService.getStats().subscribe(stats => this.stats = stats);
    // this.dashboardService.getActivities().subscribe(activities => this.recentActivities = activities);
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  getActivityTypeClass(type: string): string {
    return `activity-${type}`;
  }
}
