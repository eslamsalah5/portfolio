import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PortfolioDataService,
  Experience,
} from '../../data/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioDataService.getExperience();
  }
}
