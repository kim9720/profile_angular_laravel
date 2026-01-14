import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockData } from '../../mock-data';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit {
  profileData = mockData.profile;

  ngOnInit() {}
}