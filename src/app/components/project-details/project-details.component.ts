import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PortfolioDataService,
  Project,
} from '../../data/portfolio-data.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  project: Project | null = null;
  projectIndex: number = 0;
  showDefaultIcon: boolean = false;

  // Gallery modal properties
  selectedImage: string | null = null;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private portfolioDataService: PortfolioDataService
  ) {}

  /** Held as a field so removeEventListener gets the same reference back. */
  private readonly onKeyDown = (event: KeyboardEvent) => this.handleKeyDown(event);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.loadProject(+params['id']);
    });

    document.addEventListener('keydown', this.onKeyDown);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.onKeyDown);
    document.body.style.overflow = 'auto';
  }

  loadProject(id: number): void {
    const projects = this.portfolioDataService.getProjects();
    if (id >= 0 && id < projects.length) {
      this.project = projects[id];
      this.projectIndex = id;
      this.showDefaultIcon = false;
      this.openSection = 0; // reset accordion
      // Scroll to top when loading a new project
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/projects']);
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }

  goToNextProject(): void {
    const projects = this.portfolioDataService.getProjects();
    const nextIndex = (this.projectIndex + 1) % projects.length;
    this.router.navigate(['/project', nextIndex]);
  }

  goToPreviousProject(): void {
    const projects = this.portfolioDataService.getProjects();
    const prevIndex =
      this.projectIndex === 0 ? projects.length - 1 : this.projectIndex - 1;
    this.router.navigate(['/project', prevIndex]);
  }

  getTechIcon(tech: string): string {
    const techIcons: { [key: string]: string } = {
      Angular: 'fab fa-angular',
      Flutter: 'fas fa-mobile-alt',
      'ASP.NET': 'fab fa-microsoft',
      'SQL Server': 'fas fa-database',
      MySQL: 'fas fa-database',
      Firebase: 'fas fa-fire',
      JavaScript: 'fab fa-js-square',
      TypeScript: 'fas fa-code',
      'C#': 'fab fa-microsoft',
      Dart: 'fas fa-code',
      'Entity Framework': 'fas fa-code-branch',
      JWT: 'fas fa-key',
      Stripe: 'fas fa-credit-card',
      PayPal: 'fab fa-paypal',
      'Power BI': 'fas fa-chart-bar',
      Swagger: 'fas fa-file-code',
      Cubit: 'fas fa-cube',
      Hive: 'fas fa-box',
      'Clean Architecture': 'fas fa-sitemap',
      'Repository Pattern': 'fas fa-layer-group',
      'Unit of Work': 'fas fa-cogs',
      HTML: 'fab fa-html5',
      CSS: 'fab fa-css3-alt',
      Bootstrap: 'fab fa-bootstrap',
      GitHub: 'fab fa-github',
      Git: 'fab fa-git-alt',
      'Visual Studio': 'fab fa-microsoft',
      Postman: 'fas fa-mail-bulk',
      API: 'fas fa-server',
      'Web API': 'fas fa-globe',
      MVC: 'fas fa-building',
      MVVM: 'fas fa-puzzle-piece',
      'Machine Learning': 'fas fa-brain',
      'RAG AI': 'fas fa-robot',
    };

    for (const [key, value] of Object.entries(techIcons)) {
      if (tech.toLowerCase().includes(key.toLowerCase())) {
        return value + ' tech-icon-fa';
      }
    }
    return 'fas fa-code tech-icon-fa'; // Default icon
  }

  getTechCategory(tech: string): string {
    const categories: { [key: string]: string } = {
      Angular: 'Frontend',
      HTML: 'Frontend',
      CSS: 'Frontend',
      JavaScript: 'Frontend',
      TypeScript: 'Frontend',
      Bootstrap: 'Frontend',
      Flutter: 'Mobile',
      Dart: 'Mobile',
      'ASP.NET': 'Backend',
      'C#': 'Backend',
      'SQL Server': 'Database',
      MySQL: 'Database',
      'Entity Framework': 'ORM',
      Firebase: 'Cloud',
      JWT: 'Security',
      Stripe: 'Payment',
      PayPal: 'Payment',
      'Power BI': 'Analytics',
      Swagger: 'Documentation',
      'Clean Architecture': 'Architecture',
      'Repository Pattern': 'Architecture',
      'Unit of Work': 'Architecture',
      MVVM: 'Architecture',
      MVC: 'Architecture',
      'Machine Learning': 'AI/ML',
      'RAG AI': 'AI/ML',
    };

    for (const [key, value] of Object.entries(categories)) {
      if (tech.toLowerCase().includes(key.toLowerCase())) {
        return value;
      }
    }
    return 'Technology';
  }

  getProjectFeatures(): string[] {
    if (!this.project) return [];

    const features: string[] = [];
    const techs = this.project.technologies.map((tech) => tech.toLowerCase());
    const title = this.project.title.toLowerCase();
    const description = this.project.description.toLowerCase();

    // Backend/API Features
    if (
      techs.some((tech) => tech.includes('api') || tech.includes('asp.net'))
    ) {
      features.push('RESTful API Development');

      if (
        techs.some((tech) => tech.includes('jwt') || tech.includes('identity'))
      ) {
        features.push('Secure Authentication & Authorization');
      }

      if (techs.some((tech) => tech.includes('swagger'))) {
        features.push('API Documentation with Swagger');
      }
    }

    // Database Features
    if (
      techs.some(
        (tech) =>
          tech.includes('sql') ||
          tech.includes('database') ||
          tech.includes('ef') ||
          tech.includes('entity framework')
      )
    ) {
      features.push('Database Design & Management');

      if (
        techs.some(
          (tech) => tech.includes('stored procedures') || tech.includes('t-sql')
        )
      ) {
        features.push('Advanced SQL Operations');
      }
    }

    // Frontend Features
    if (
      techs.some(
        (tech) =>
          tech.includes('angular') ||
          tech.includes('html') ||
          tech.includes('css')
      )
    ) {
      features.push('Modern Web Interface');

      if (techs.some((tech) => tech.includes('responsive'))) {
        features.push('Responsive Design');
      }
    }

    // Mobile Features
    if (
      techs.some((tech) => tech.includes('flutter') || tech.includes('dart'))
    ) {
      features.push('Cross-platform Mobile Development');

      if (
        techs.some((tech) => tech.includes('bloc') || tech.includes('cubit'))
      ) {
        features.push('State Management Architecture');
      }

      if (
        techs.some((tech) => tech.includes('offline') || tech.includes('hive'))
      ) {
        features.push('Offline Data Support');
      }
    }

    // Firebase Features
    if (techs.some((tech) => tech.includes('firebase'))) {
      if (techs.some((tech) => tech.includes('auth'))) {
        features.push('Firebase Authentication');
      }
      if (techs.some((tech) => tech.includes('firestore'))) {
        features.push('Real-time Database');
      }
      if (techs.some((tech) => tech.includes('messaging'))) {
        features.push('Push Notifications');
      }
    }

    // Payment Features
    if (
      techs.some((tech) => tech.includes('stripe') || tech.includes('paypal'))
    ) {
      features.push('Secure Payment Integration');
    }

    // Architecture Features
    if (
      techs.some(
        (tech) =>
          tech.includes('clean architecture') ||
          tech.includes('onion') ||
          tech.includes('mvvm')
      )
    ) {
      features.push('Clean Code Architecture');
    }

    if (
      techs.some(
        (tech) => tech.includes('repository') || tech.includes('unit of work')
      )
    ) {
      features.push('Repository Pattern Implementation');
    }

    // AI/ML Features
    if (
      techs.some(
        (tech) =>
          tech.includes('rag') ||
          tech.includes('ai') ||
          tech.includes('machine learning')
      )
    ) {
      features.push('AI/ML Integration');
    }

    // Data Visualization
    if (
      techs.some((tech) => tech.includes('power bi') || tech.includes('charts'))
    ) {
      features.push('Data Visualization & Analytics');
    }

    // Project-specific features based on title/description
    if (title.includes('bus') || title.includes('management')) {
      features.push('Multi-role Management System');
    }

    if (title.includes('epilepsy') || description.includes('health')) {
      features.push('Healthcare Support Features');
    }

    if (title.includes('exam') || description.includes('exam')) {
      features.push('Automated Grading System');
    }

    if (title.includes('book') || description.includes('book')) {
      features.push('Content Management & Search');
    }

    if (title.includes('news') || description.includes('news')) {
      features.push('Real-time Content Updates');
    }

    if (title.includes('weather') || description.includes('weather')) {
      features.push('Weather Forecast Integration');
    }

    if (title.includes('social') || description.includes('social')) {
      features.push('Social Features & Communication');
    }

    if (
      title.includes('restaurant') ||
      title.includes('food') ||
      description.includes('meal')
    ) {
      features.push('Menu Management & Ordering');
    }

    if (title.includes('dashboard') || description.includes('dashboard')) {
      features.push('Interactive Dashboard Interface');
    }

    // Add default features if none found
    if (features.length === 0) {
      features.push(
        'Modern UI/UX Design',
        'Responsive Layout',
        'Clean Code Implementation'
      );
    }

    // Remove duplicates and limit to reasonable number
    return [...new Set(features)].slice(0, 8);
  }

  getProjectCategory(): string {
    if (!this.project) return 'Other';

    switch (this.getProjectCategoryForProject(this.project)) {
      case 'mobile':
        return 'Mobile Application';
      case 'web':
        return 'Web Application';
      default:
        return 'Software Project';
    }
  }

  onImageError(): void {
    this.showDefaultIcon = true;
  }

  getProjectLogo(): string | null {
    if (!this.project) return null;
    const title = this.project.title.toLowerCase();
    if (title.includes('godawa')) return 'assets/images/godawa.png';
    if (title.includes('ra7ala')) return 'assets/images/ra7alaLogo.svg';
    return null;
  }

  getProjectIcon(): string {
    if (!this.project) return 'fas fa-code';

    const webTechs = [
      'Angular',
      'ASP.NET',
      'Web API',
      'SQL Server',
      'HTML',
      'CSS',
      'JavaScript',
    ];
    const mobileTechs = ['Flutter', 'Dart', 'Firebase', 'Android'];
    const databaseTechs = ['SQL Server', 'MySQL', 'Database', 'T-SQL'];
    const apiTechs = ['API', 'RESTful', 'Web API'];

    const hasWebTech = this.project.technologies.some((tech) =>
      webTechs.some((webTech) =>
        tech.toLowerCase().includes(webTech.toLowerCase())
      )
    );

    const hasMobileTech = this.project.technologies.some((tech) =>
      mobileTechs.some((mobileTech) =>
        tech.toLowerCase().includes(mobileTech.toLowerCase())
      )
    );

    const hasDatabaseTech = this.project.technologies.some((tech) =>
      databaseTechs.some((dbTech) =>
        tech.toLowerCase().includes(dbTech.toLowerCase())
      )
    );

    const hasApiTech = this.project.technologies.some((tech) =>
      apiTechs.some((apiTech) =>
        tech.toLowerCase().includes(apiTech.toLowerCase())
      )
    );

    if (hasMobileTech) return 'fas fa-mobile-alt';
    if (hasApiTech) return 'fas fa-server';
    if (hasDatabaseTech) return 'fas fa-database';
    if (hasWebTech) return 'fas fa-globe';

    return 'fas fa-code';
  }
  onGalleryImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  openImageModal(imageSrc: string, index: number): void {
    this.selectedImage = imageSrc;
    this.currentImageIndex = index;
    document.body.style.overflow = 'hidden';
  }

  // Close image modal
  closeImageModal(): void {
    this.selectedImage = null;
    this.currentImageIndex = 0;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  // Navigate to previous image
  previousImage(): void {
    if (this.project?.gallery && this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.selectedImage = this.project.gallery[this.currentImageIndex];
    }
  }

  // Navigate to next image
  nextImage(): void {
    if (
      this.project?.gallery &&
      this.currentImageIndex < this.project.gallery.length - 1
    ) {
      this.currentImageIndex++;
      this.selectedImage = this.project.gallery[this.currentImageIndex];
    }
  }

  // Handle keyboard events for modal
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.selectedImage) return;

    switch (event.key) {
      case 'Escape':
        this.closeImageModal();
        break;
      case 'ArrowLeft':
        this.previousImage();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
    }
  }

  /**
   * One chip, differentiated by text. Amber is reserved for paid production
   * work — that is the distinction a reader is actually scanning for.
   */
  getProjectTypeBadgeClass(): string {
    const type = this.project?.projectType ?? '';
    return type === 'Professional' || type === 'Freelance' ? 'chip--accent' : '';
  }

  getProjectTypeDisplay(): string {
    if (!this.project) return '';

    // Special display for graduation projects with clarification
    if (this.project.projectType === 'Graduation') {
      if (this.project.title.toLowerCase().includes('ra7ala')) {
        return 'ITI Graduation Project';
      } else if (this.project.title.toLowerCase().includes('epilepsy')) {
        return 'University Graduation Project';
      }
      return 'Graduation Project';
    }

    return this.project.projectType;
  }

  // Gallery display methods
  getDisplayedGalleryImages(): string[] {
    if (!this.project?.gallery) return [];
    return this.project.gallery.slice(0, 3); // Show only first 3 images
  }

  getRemainingImagesCount(): number {
    if (!this.project?.gallery) return 0;
    const remaining = this.project.gallery.length - 3;
    return remaining > 0 ? remaining : 0;
  }

  openSection: number | null = 0; // first section open by default

  toggleSection(i: number): void {
    this.openSection = this.openSection === i ? null : i;
  }

  /**
   * Parse fullDescription into accordion sections.
   * Sections are separated by lines that look like "Emoji Title:" or "Title:"
   */
  getDescriptionSections(): { emoji: string; title: string; points: string[] }[] {
    if (!this.project?.fullDescription) return [];

    const lines = this.project.fullDescription.split('\n').map(l => l.trim()).filter(l => l);
    const sections: { emoji: string; title: string; points: string[] }[] = [];
    let current: { emoji: string; title: string; points: string[] } | null = null;

    // Regex: optional emoji + text ending with colon (section header)
    const headerRe = /^([\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}🌐🤖💳🎫👥🏗️⚡📋🔐📅🚌🛠️🔑🚀📊🎯✨🔧💡🌟⭐🏆🎖️🔒🔑💡🌐]+)?\s*(.+):$/u;

    for (const line of lines) {
      const match = line.match(headerRe);
      if (match) {
        if (current) sections.push(current);
        current = {
          emoji: match[1] ?? '📌',
          title: match[2].trim(),
          points: [],
        };
      } else if (line.startsWith('•') && current) {
        current.points.push(line.replace(/^•\s*/, '').trim());
      } else if (line.startsWith('-') && current) {
        current.points.push(line.replace(/^-\s*/, '').trim());
      } else if (current && current.points.length === 0 && !line.startsWith('•')) {
        // Plain text before first bullet — treat as a point
        current.points.push(line);
      }
    }
    if (current) sections.push(current);

    // Filter out sections with no points
    return sections.filter(s => s.points.length > 0);
  }
  isLiveUrl(url: string): boolean {
    if (!url) return false;
    return (
      !url.includes('drive.google.com') &&
      !url.includes('youtube.com') &&
      !url.includes('youtu.be') &&
      !url.includes('vimeo.com')
    );
  }

  /** Extracts a clean display URL (hostname only) */
  getDemoDisplayUrl(url: string): string {
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace('www.', '');
    } catch {
      return url;
    }
  }

  /**
   * Tech category breakdown for the sidebar bars. The bars are all one colour —
   * length already encodes the count, so a per-category hue would be decoration.
   */
  getTechCategoryBreakdown(): { name: string; count: number; percent: number }[] {
    if (!this.project) return [];

    const counts: { [key: string]: number } = {};
    for (const tech of this.project.technologies) {
      const cat = this.getTechCategory(tech);
      counts[cat] = (counts[cat] ?? 0) + 1;
    }

    const total = this.project.technologies.length;
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round((count / total) * 100),
      }));
  }

  /** Up to 3 other projects in the same category. */
  getRelatedProjects(): Project[] {
    if (!this.project) return [];
    const currentCat = this.getProjectCategoryForProject(this.project);

    return this.portfolioDataService
      .getProjects()
      .filter(
        (p, i) =>
          i !== this.projectIndex &&
          this.getProjectCategoryForProject(p) === currentCat
      )
      .slice(0, 3);
  }

  /** The single source for both the header chip and the related-project match. */
  getProjectCategoryForProject(project: Project): string {
    const webTechs = ['Angular', 'ASP.NET', 'Web API', 'SQL Server'];
    // Firebase alone does not make something mobile — GoDawa's backend uses
    // Firebase FCM for push, and that was labelling it a mobile app.
    const mobileTechs = ['Flutter', 'Dart', 'Android', 'iOS'];
    if (project.technologies.some(t => mobileTechs.some(m => t.includes(m)))) return 'mobile';
    if (project.technologies.some(t => webTechs.some(w => t.includes(w)))) return 'web';
    return 'other';
  }

  navigateToProject(project: Project): void {
    const idx = this.portfolioDataService.getProjects().indexOf(project);
    this.router.navigate(['/project', idx]);
  }
}
