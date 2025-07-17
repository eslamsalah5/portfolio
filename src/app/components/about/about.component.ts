import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PortfolioDataService,
  PersonalInfo,
  Education,
  Experience,
  Course,
  CV,
} from '../../data/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  private portfolioDataService = inject(PortfolioDataService);

  personalInfo: PersonalInfo;
  education: Education[] = [];
  internships: Experience[] = [];
  courses: Course[] = [];
  cvs: CV[] = [];

  // CV download configuration
  cvFileName: string = 'Eslam_Mohamed_Salah_CV.pdf';
  cvPath: string = 'assets/cv/Eslam_Mohamed_Salah_CV.pdf';

  constructor() {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.education = this.portfolioDataService.getEducation();
    this.internships = this.portfolioDataService.getInternships();
    this.courses = this.portfolioDataService.getCourses();
    this.cvs = this.portfolioDataService.getCVs();
  }

  // Download CV method
  downloadCV(): void {
    try {
      const link = document.createElement('a');
      link.href = this.cvPath;
      link.download = this.cvFileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Track download analytics (optional)
      console.log('CV downloaded:', this.cvFileName);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open(this.cvPath, '_blank');
    }
  }

  // View CV online method
  viewCV(): void {
    window.open(this.cvPath, '_blank');
  }

  // Contact methods
  openEmail(): void {
    window.location.href = `mailto:${this.personalInfo.email}`;
  }

  openLinkedIn(): void {
    window.open(this.personalInfo.linkedin, '_blank');
  }

  openGitHub(): void {
    window.open(this.personalInfo.github, '_blank');
  }

  // Phone call method
  callPhone(): void {
    window.location.href = `tel:${this.personalInfo.phone}`;
  }

  // Calculate years of experience
  getYearsOfExperience(): number {
    const startYear = 2023; // Based on freelancing start year
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }

  // Get all courses
  getRecentCourses(): Course[] {
    return this.courses;
  }

  // Format phone number for display
  getFormattedPhone(): string {
    const phone = this.personalInfo.phone;
    // Format: +20 101 311 4472
    if (phone.startsWith('+201')) {
      return phone
        .replace('+201', '+20 101 ')
        .replace(/(\d{3})(\d{4})/, '$1 $2');
    }
    return phone;
  }
}
