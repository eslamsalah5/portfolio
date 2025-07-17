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

  constructor() {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
    this.profileImage = this.personalInfo.profileImage;
  }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
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
