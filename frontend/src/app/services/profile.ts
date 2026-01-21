import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { mockData } from '../mock-data'; // Adjust path to your mock-data.ts

// Interfaces (define these for type safety)
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string | null;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

export interface ApiProfileResponse {
  profileInfo: any;
  experiences: any[];
  projects: any[];
}

export interface ProfileData {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
}

// Hardcoded skills (since not in API; update if you add to Laravel endpoint)
const hardcodedSkills: SkillCategory[] = [
  {
    category: 'Frontend',
    technologies: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend',
    technologies: ['Laravel', 'RESTful APIs', 'Spring Boot']
  },
  {
    category: 'Database',
    technologies: ['PostgreSQL', 'MySQL']
  },
  {
    category: 'Tools & Others',
    technologies: ['Git', 'CI/CD', 'Agile/Scrum']
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://127.0.0.1:8000/api/profile_data'; // Your Laravel endpoint

  constructor(private http: HttpClient) {}

  getProfileData(): Observable<ProfileData> {
    return this.http.get<ApiProfileResponse>(this.apiUrl).pipe(
      map((apiData: ApiProfileResponse) => {
        // Map API data to our structure (adjust fields to match your Laravel models)
        const profile: Profile = {
          name: apiData.profileInfo.name || mockData.profile.name,
          title: apiData.profileInfo.title || mockData.profile.title,
          tagline: apiData.profileInfo.tagline || mockData.profile.tagline,
          bio: apiData.profileInfo.bio || mockData.profile.bio,
          email: apiData.profileInfo.email || mockData.profile.email,
          github: apiData.profileInfo.github || mockData.profile.github,
          linkedin: apiData.profileInfo.linkedin || mockData.profile.linkedin,
          twitter: apiData.profileInfo.twitter || mockData.profile.twitter,
          location: apiData.profileInfo.location || mockData.profile.location
        };

        const experience: Experience[] = apiData.experiences.map((exp: any) => ({
          id: exp.id,
          company: exp.company,
          position: exp.position,
          duration: exp.duration,
          location: exp.location,
          description: Array.isArray(exp.description) ? exp.description : [exp.description || '']
        }));

        const projects: Project[] = apiData.projects.map((proj: any) => ({
          id: proj.id,
          title: proj.title,
          description: proj.description,
          technologies: Array.isArray(proj.technologies) ? proj.technologies : [proj.technologies || ''],
          image: proj.image || '',
          github: proj.github || '',
          demo: proj.demo || null,
          featured: proj.featured ?? false
        }));

        return {
          profile,
          skills: hardcodedSkills,
          projects,
          experience
        };
      }),
      catchError((error) => {
        console.error('API error:', error);
        console.warn('Using mock data as fallback.');
        // Enhance mock with hardcoded skills if missing
        return of({
          ...mockData,
          skills: mockData.skills || hardcodedSkills
        });
      })
    );
  }
}
