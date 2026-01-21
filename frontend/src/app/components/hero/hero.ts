import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../services/profile';  // ← This is correct for profile.ts

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  profileData: Profile | null = null;
  loading = true;  // Optional for UX

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfileData().subscribe({
      next: (data) => {
        this.profileData = data.profile;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading profile data:', error);
        this.loading = false;
        // Optional fallback: Import mockData and set this.profileData = mockData.profile;
      }
    });
  }
}
