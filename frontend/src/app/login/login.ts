import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
  };
}

interface LoginError {
  message: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;
  isLoading = false;
  showPassword = false;
  errorMessage = '';
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.http.post<LoginResponse>('http://127.0.0.1:8000/api/login', loginData).subscribe({
        next: (response) => {
          const token = response.token;
          const storage = this.loginForm.value.rememberMe ? localStorage : sessionStorage;
          storage.setItem('authToken', token);
          console.log('Login successful:', response.user);
          this.router.navigate(['dashboard']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          // Generic message for security (don't reveal if email or password is wrong)
          this.errorMessage = 'Either email or password is incorrect.';
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }
}
