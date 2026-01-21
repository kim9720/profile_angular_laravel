import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, SkillCategory } from '../../services/profile'; // Adjust path to your ProfileService

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  skillsData: SkillCategory[] | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfileData().subscribe({
      next: (data) => {
        this.skillsData = data.skills;
      },
      error: (error) => {
        console.error('Error loading skills data:', error);
        // Optionally fallback to mockData if needed
      }
    });
  }
}
