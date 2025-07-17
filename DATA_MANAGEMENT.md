# Portfolio Data Management

This Angular portfolio project uses a centralized data service (`PortfolioDataService`) to manage all personal and professional information. This approach ensures that all updates are made in one place and automatically reflected throughout the entire application.

## Data Service Location

The main data file is located at: `src/app/data/portfolio-data.service.ts`

## Data Structure

### Personal Information

- Name, title, contact details
- Social media links
- Professional summary
- Profile image

### Skills

- Organized by categories (Programming Languages, Backend, Frontend, Mobile, Tools, Concepts)
- Each skill includes: name, icon, color, category
- Supports both Font Awesome icons and custom text icons

### Projects

- Project title, description, technologies used
- Demo and GitHub URLs
- Project images

### Experience

- Job title, company, period
- Description and technologies used

### Education

- Degree, institution, period
- Optional description

### Online Courses

- Course name, provider, date
- Optional URL

## How to Update Your Data

### 1. Update Personal Information

```typescript
// In portfolio-data.service.ts, modify the personalInfo object:
personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+20 123 456 7890",
  location: "Your Location",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  summary: "Your professional summary...",
  profileImage: "assets/images/your-profile.jpg",
};
```

### 2. Add or Update Skills

```typescript
// Add a new skill to the skills array:
{
  name: 'New Technology',
  icon: 'fas fa-code', // Font Awesome icon or 'text:YourText' for custom text
  color: '#ff6b35',
  category: 'Programming Languages'
}
```

### 3. Add Projects

```typescript
// Add to the projects array:
{
  title: 'Project Name',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: 'assets/images/project.jpg',
  demoUrl: 'https://demo-url.com', // Optional
  githubUrl: 'https://github.com/username/repo' // Optional
}
```

### 4. Add Experience

```typescript
// Add to the experience array:
{
  title: 'Job Title',
  company: 'Company Name',
  period: '2023 - Present',
  description: 'Job description and achievements...',
  technologies: ['Tech1', 'Tech2']
}
```

### 5. Add Courses

```typescript
// Add to the courses array:
{
  name: 'Course Name',
  provider: 'Provider Name',
  date: 'Month, Year',
  url: 'https://course-url.com' // Optional
}
```

## Available Categories for Skills

1. **Programming Languages** - C#, JavaScript, TypeScript, Java, etc.
2. **Backend Technologies** - ASP.NET Core, databases, APIs, etc.
3. **Frontend Technologies** - HTML, CSS, Angular, Bootstrap, etc.
4. **Mobile Development** - Flutter, Dart, mobile-specific technologies
5. **Development Tools** - IDEs, version control, project management tools
6. **Design & Development Concepts** - OOP, SOLID, design patterns, etc.

## How Components Use the Data

All components are already configured to use the data service:

```typescript
// Example usage in any component:
export class YourComponent implements OnInit {
  constructor(private portfolioDataService: PortfolioDataService) {}

  ngOnInit(): void {
    // Get all skills
    const skills = this.portfolioDataService.getSkills();

    // Get skills by category
    const mobileSkills = this.portfolioDataService.getSkillsByCategory("Mobile Development");

    // Get personal info
    const personalInfo = this.portfolioDataService.getPersonalInfo();

    // Get projects
    const projects = this.portfolioDataService.getProjects();
  }
}
```

## Benefits of This Approach

1. **Single Source of Truth**: All data is centralized in one file
2. **Easy Updates**: Change data in one place, updates everywhere
3. **Type Safety**: TypeScript interfaces ensure data consistency
4. **Scalability**: Easy to add new data types and categories
5. **Maintainability**: Clean separation of data and presentation logic

## Quick Update Guide

To update your portfolio quickly:

1. Open `src/app/data/portfolio-data.service.ts`
2. Modify the relevant data arrays/objects
3. Save the file
4. The entire application will automatically reflect your changes

No need to edit multiple HTML files or components - everything is driven by this single data source!
