import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockData } from '../../mock-data';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent implements OnInit {
  profileData = mockData.profile;
  currentYear = new Date().getFullYear();

  ngOnInit() {}
}
