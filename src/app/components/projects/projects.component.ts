import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  PortfolioDataService,
  Project,
} from '../../data/portfolio-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  featuredProjects: Project[] = [];
  activeFilter: string = 'all';

  constructor(
    private portfolioDataService: PortfolioDataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.projects = this.portfolioDataService.getProjects();
    // Featured = Professional projects (top 2)
    this.featuredProjects = this.projects
      .filter((p) => p.projectType === 'Professional')
      .slice(0, 2);
    this.filteredProjects = this.projects;
  }

  filterProjects(category: string): void {
    this.activeFilter = category;

    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else if (category === 'web') {
      this.filteredProjects = this.projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase().includes('angular') ||
            tech.toLowerCase().includes('asp.net') ||
            tech.toLowerCase().includes('web api') ||
            tech.toLowerCase().includes('sql server') ||
            tech.toLowerCase().includes('core'),
        ),
      );
    } else if (category === 'mobile') {
      this.filteredProjects = this.projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase().includes('flutter') ||
            tech.toLowerCase().includes('dart') ||
            tech.toLowerCase().includes('firebase') ||
            tech.toLowerCase().includes('mobile'),
        ),
      );
    }
  }

  getProjectCount(category: string): number {
    if (category === 'all') return this.projects.length;

    if (category === 'web') {
      return this.projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase().includes('angular') ||
            tech.toLowerCase().includes('asp.net') ||
            tech.toLowerCase().includes('web api') ||
            tech.toLowerCase().includes('sql server') ||
            tech.toLowerCase().includes('core'),
        ),
      ).length;
    }

    if (category === 'mobile') {
      return this.projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase().includes('flutter') ||
            tech.toLowerCase().includes('dart') ||
            tech.toLowerCase().includes('firebase') ||
            tech.toLowerCase().includes('mobile'),
        ),
      ).length;
    }

    return 0;
  }

  isLiveProject(project: Project): boolean {
    if (!project.demoUrl) return false;
    const url = project.demoUrl;
    return (
      !url.includes('drive.google.com') &&
      !url.includes('youtube.com') &&
      !url.includes('youtu.be') &&
      !url.includes('vimeo.com')
    );
  }

  getProjectLogo(project: Project): string | null {
    const title = project.title.toLowerCase();
    if (title.includes('ra7ala')) return 'assets/images/ra7alaLogo.svg';
    return null;
  }

  /** Clearing `image` swaps the figure to the initial plate fallback. */
  onImageError(project: Project): void {
    project.image = '';
  }

  viewProjectDetails(project: Project): void {
    const projectIndex = this.projects.indexOf(project);
    this.router.navigate(['/project', projectIndex]);
  }
}
