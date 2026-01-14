import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockData } from '../../mock-data';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  profileData = mockData.profile;
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitMessage = '';
  submitSuccess = false;

  ngOnInit() {}

  onSubmit() {
    // Mock form submission
    this.submitMessage = 'Message sent successfully! I\'ll get back to you soon.';
    this.submitSuccess = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.submitMessage = '';
    }, 3000);
  }
}
