import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import {
  PortfolioDataService,
  PersonalInfo,
} from '../../data/portfolio-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private scrollService = inject(ScrollService);
  private portfolioDataService = inject(PortfolioDataService);

  personalInfo: PersonalInfo;

  constructor() {
    this.personalInfo = this.portfolioDataService.getPersonalInfo();
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToElement(sectionId);
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToTop();
  }
}
