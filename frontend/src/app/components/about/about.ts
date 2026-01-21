import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../services/profile'; // Adjust path to your ProfileService

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  profileData: Profile | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfileData().subscribe({
      next: (data) => {
        this.profileData = data.profile;
      },
      error: (error) => {
        console.error('Error loading profile data:', error);
        // Optionally fallback to mockData if needed
      }
    });
  }
}
