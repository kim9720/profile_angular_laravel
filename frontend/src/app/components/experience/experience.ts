import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockData } from '../../mock-data';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit {
  experienceData = mockData.experience;

  ngOnInit() {}
}
