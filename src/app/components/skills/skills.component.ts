import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Skill } from '../../data/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  skillCategories: string[] = [];
  skills: Skill[] = [];

  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    this.skills = this.portfolioDataService.getSkills();
    this.skillCategories = this.portfolioDataService.getSkillCategories();
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.portfolioDataService.getSkillsByCategory(category);
  }

  getIconClass(skill: Skill): string {
    if (skill.icon.startsWith('text:')) {
      return '';
    }
    return skill.icon;
  }

  getIconText(skill: Skill): string {
    if (skill.icon.startsWith('text:')) {
      return skill.icon.replace('text:', '');
    }
    return '';
  }

  isTextIcon(skill: Skill): boolean {
    return skill.icon.startsWith('text:');
  }
}
