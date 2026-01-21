import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Project } from '../../services/profile'; // Adjust path to your ProfileService

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData: Project[] | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfileData().subscribe({
      next: (data) => {
        this.projectsData = data.projects;
      },
      error: (error) => {
        console.error('Error loading projects data:', error);
        // Optionally fallback to mockData if needed
      }
    });
  }
}
