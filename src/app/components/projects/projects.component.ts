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
  activeFilter: string = 'all';

  constructor(
    private portfolioDataService: PortfolioDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projects = this.portfolioDataService.getProjects();
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
            tech.toLowerCase().includes('core')
        )
      );
    } else if (category === 'mobile') {
      this.filteredProjects = this.projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase().includes('flutter') ||
            tech.toLowerCase().includes('dart') ||
            tech.toLowerCase().includes('firebase') ||
            tech.toLowerCase().includes('mobile')
        )
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
            tech.toLowerCase().includes('core')
        )
      ).length;
    }

    if (category === 'mobile') {
      return this.projects.filter((project) =>
        project.technologies.some(
          (tech) =>
            tech.toLowerCase().includes('flutter') ||
            tech.toLowerCase().includes('dart') ||
            tech.toLowerCase().includes('firebase') ||
            tech.toLowerCase().includes('mobile')
        )
      ).length;
    }

    return 0;
  }

  getProjectCategory(project: Project): string {
    const webTechs = ['angular', 'asp.net', 'web api', 'sql server', 'core'];
    const mobileTechs = ['flutter', 'dart', 'firebase', 'mobile'];

    const hasWebTech = project.technologies.some((tech) =>
      webTechs.some((webTech) => tech.toLowerCase().includes(webTech))
    );

    const hasMobileTech = project.technologies.some((tech) =>
      mobileTechs.some((mobileTech) => tech.toLowerCase().includes(mobileTech))
    );

    if (hasMobileTech) return 'mobile';
    if (hasWebTech) return 'web';
    return 'other';
  }

  getProjectTypeBadgeClass(projectType: string): string {
    switch (projectType) {
      case 'Personal Training':
        return 'badge-personal';
      case 'Academic':
        return 'badge-academic';
      case 'Graduation':
        return 'badge-graduation';
      case 'Freelance':
        return 'badge-freelance';
      default:
        return 'badge-default';
    }
  }

  viewProjectDetails(project: Project): void {
    const projectIndex = this.projects.indexOf(project);
    this.router.navigate(['/project', projectIndex]);
  }
}
