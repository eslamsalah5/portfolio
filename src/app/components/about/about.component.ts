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
    const startYear = 2024; // Based on freelancing start year
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }

  // Get all courses
  getRecentCourses(): Course[] {
    return this.courses;
  }

  // Format phone number for display — show as-is
  getFormattedPhone(): string {
    return this.personalInfo.phone; // +201013114472
  }

  // WhatsApp link
  openWhatsApp(): void {
    // Remove leading + for wa.me URL
    const number = this.personalInfo.phone.replace('+', '');
    window.open(`https://wa.me/${number}`, '_blank');
  }
}
