import { Component, OnInit, inject } from '@angular/core';
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
  private portfolioDataService = inject(PortfolioDataService);

  skillCategories: string[] = [];
  skills: Skill[] = [];
  activeCategory: string = '';

  /** Resolved on change rather than per render — the template lists ~30 rows. */
  activeSkills: Skill[] = [];

  ngOnInit(): void {
    this.skills = this.portfolioDataService.getSkills();
    this.skillCategories = this.portfolioDataService.getSkillCategories();
    if (this.skillCategories.length > 0) {
      this.setActiveCategory(this.skillCategories[0]);
    }
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.activeSkills = this.getSkillsByCategory(category);
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.portfolioDataService.getSkillsByCategory(category);
  }

  getIconClass(skill: Skill): string {
    if (skill.icon.startsWith('text:')) return '';
    return skill.icon;
  }

  getIconText(skill: Skill): string {
    if (skill.icon.startsWith('text:')) return skill.icon.replace('text:', '');
    return '';
  }

  isTextIcon(skill: Skill): boolean {
    return skill.icon.startsWith('text:');
  }

  getCategoryShortName(category: string): string {
    const shortNames: { [key: string]: string } = {
      'Programming Languages': 'Languages',
      'Backend Technologies': 'Backend',
      'Frontend Technologies': 'Frontend',
      'Mobile Development': 'Mobile',
      'Development Tools': 'Tools',
      'Design & Development Concepts': 'Concepts',
      'Cloud & DevOps': 'Cloud & DevOps',
    };
    return shortNames[category] ?? category;
  }
}
