import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockData } from '../../mock-data';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements OnInit {
  projectsData = mockData.projects;

  ngOnInit() {}
}