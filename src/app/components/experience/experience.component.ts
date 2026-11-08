import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PortfolioDataService,
  Experience,
} from '../../data/portfolio-data.service';

/** A freelance delivery. Not chronological — deliberately unnumbered. */
interface FreelanceWork {
  name: string;
  kind: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  private portfolioDataService = inject(PortfolioDataService);

  experiences: Experience[] = [];
  email: string = '';
  linkedin: string = '';

  readonly freelanceWork: FreelanceWork[] = [
    {
      name: 'Jasoora',
      kind: 'Reading and publishing app · Jul–Nov 2026',
      description:
        'Arabic-first mobile app for novels, short stories, and illustrated series. Readers can build a library and resume where they left off, and writers can draft and publish their own stories.',
      technologies: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL'],
    },
    {
      name: 'X World',
      kind: 'Anonymous social platform',
      description:
        'Flutter app where users interact under unique X identities. Real-time chat, post commenting, premium tiers, a gift system, localization, theming, and content moderation.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Real-time chat'],
    },
    {
      name: 'KITO',
      kind: 'Multi-client mobile app',
      description:
        'One codebase delivered to several clients, each with its own feature set and configuration. Built for reconfiguration rather than forking.',
      technologies: ['Flutter', 'Dart', 'REST API'],
    },
    {
      name: 'Fashion Store',
      kind: 'Full stack e-commerce',
      description:
        'Clothing retail storefront and admin with payment processing and inventory management. .NET Core backend, Angular frontend, SQL Server.',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Payment gateway'],
    },
  ];

  ngOnInit(): void {
    this.experiences = this.portfolioDataService.getExperience();
    const info = this.portfolioDataService.getPersonalInfo();
    this.email = info.email;
    this.linkedin = info.linkedin;
  }
}
