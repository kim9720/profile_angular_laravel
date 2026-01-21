import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Experience } from '../../services/profile'; // Adjust path to your ProfileService

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit {
  experienceData: Experience[] | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfileData().subscribe({
      next: (data) => {
        this.experienceData = data.experience;
      },
      error: (error) => {
        console.error('Error loading experience data:', error);
        // Optionally fallback to mockData if needed
      }
    });
  }
}
