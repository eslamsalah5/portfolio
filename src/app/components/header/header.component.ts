import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import {
  PortfolioDataService,
  PersonalInfo,
} from '../../data/portfolio-data.service';

interface HeroMetric {
  value: string;
  label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  private portfolioDataService = inject(PortfolioDataService);

  activeSection: string = 'home';
  isScrolled: boolean = false;
  personalInfo: PersonalInfo;
  profileImage: string = '';

  /** Drives the single on-load reveal of the metric row. */
  metricsRevealed: boolean = false;
  private revealTimer?: ReturnType<typeof setTimeout>;

  /** Figures from the GoDawa platform. Sourced from portfolio-data.service.ts. */
  readonly metrics: HeroMetric[] = [
    { value: '388', label: 'REST endpoints' },
    { value: '52', label: 'domain entities' },
    { value: '38', label: 'EF migrations' },
    { value: '89%', label: 'fewer N+1 queries' },
  ];

  constructor() {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
    this.profileImage = this.personalInfo.profileImage;
  }

  ngOnInit(): void {
    this.updateActiveSection();
    this.revealTimer = setTimeout(() => (this.metricsRevealed = true), 120);
  }

  ngOnDestroy(): void {
    if (this.revealTimer) {
      clearTimeout(this.revealTimer);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToElement(sectionId);
    this.activeSection = sectionId;
  }

  private updateActiveSection(): void {
    const currentSection = this.scrollService.getCurrentSection();
    if (currentSection) {
      this.activeSection = currentSection;
    }
  }
}
