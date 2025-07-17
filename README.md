# 🚀 Portfolio - Eslam Mohamed Salah

<div align="center">
  <img src="public/assets/images/1.jpg" alt="Eslam Mohamed Salah" width="200" style="border-radius: 50%;">
  
  ### Full Stack Developer | Angular & .NET Specialist
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/eslamsalah55)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/eslamsalah5)
  [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:eslamsalah5364@gmail.com)
  
  ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![.NET](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white)
  ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
</div>

## 📖 About This Project

A modern, responsive portfolio website built with **Angular 19** showcasing my journey as a Full Stack Developer. This single-page application features a clean design, smooth animations, and comprehensive project demonstrations.

### ✨ Key Features

- 🎨 **Modern Design**: Clean, professional UI with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- 🔧 **Interactive Components**: Dynamic project galleries and skill showcases
- 📧 **Contact Form**: Integrated email functionality with form validation
- 🎯 **SEO Optimized**: Meta tags and structured data for better search visibility
- 🌟 **Performance Focused**: Optimized loading times and smooth user experience

### 🛠️ Tech Stack

- **Frontend**: Angular 19, TypeScript, HTML5, CSS3
- **Styling**: Custom CSS with CSS Variables, Flexbox, Grid
- **Icons**: Font Awesome
- **Build Tool**: Angular CLI
- **Version Control**: Git & GitHub

## 🎯 Sections Overview

### 🏠 Home

- Hero section with professional introduction
- Call-to-action buttons for CV downloads
- Animated elements and smooth scrolling

### 👨‍💻 About

- Professional summary and background
- Education and certifications
- Personal interests and goals

### 💼 Experience

- Work experience and internships
- Technologies used in each role
- Key achievements and responsibilities

### 🎯 Skills

- Categorized skill showcase
- Interactive skill cards with proficiency levels
- Technologies grouped by expertise area

### 🚀 Projects

- Featured project gallery
- Detailed project descriptions
- Technology stacks and live demos
- Project type categorization (Personal, Academic, Graduation, Freelance)

### 📞 Contact

- Contact form with validation
- Social media links
- Professional contact information

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/eslamsalah5/myPorfolio.git
cd myPorfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
ng serve
```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

### 🔧 Available Scripts

| Command    | Description              |
| ---------- | ------------------------ |
| `ng serve` | Start development server |
| `ng build` | Build for production     |
| `ng test`  | Run unit tests           |
| `ng lint`  | Run code linting         |
| `ng e2e`   | Run end-to-end tests     |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header/         # Navigation header
│   │   ├── home/           # Hero section
│   │   ├── about/          # About section
│   │   ├── experience/     # Experience timeline
│   │   ├── skills/         # Skills showcase
│   │   ├── projects/       # Projects gallery
│   │   ├── contact/        # Contact form
│   │   └── footer/         # Footer component
│   ├── data/               # Data services
│   │   └── portfolio-data.service.ts
│   ├── services/           # Business logic services
│   │   ├── email.service.ts
│   │   └── scroll.service.ts
│   └── config/             # Configuration files
├── assets/                 # Static assets
│   ├── images/            # Project images and gallery
│   └── cv/                # CV downloads
└── styles/                # Global styles and variables
```

## 🎨 Customization

### Updating Personal Information

Edit the data in `src/app/data/portfolio-data.service.ts`:

```typescript
personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};
```

### Adding New Projects

Add projects to the `projects` array in the data service:

```typescript
projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description',
    technologies: ['Angular', 'TypeScript'],
    // ... other fields
  }
];
```

### Styling Customization

Modify CSS variables in `src/styles/variables.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... other variables */
}
```

## 🔧 Email Configuration

To enable the contact form:

1. Update email configuration in `src/app/config/email-config.ts`
2. Set up your email service provider
3. Configure CORS settings if needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
ng build --configuration production
```

### Deploy to GitHub Pages

```bash
npm install -g angular-cli-ghpages
ng build --configuration production
npx angular-cli-ghpages --dir=dist/portfolio
```

### Deploy to Netlify/Vercel

1. Build the project: `ng build --configuration production`
2. Upload the `dist/portfolio` folder
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Eslam Mohamed Salah**

- 📧 Email: eslamsalah5364@gmail.com
- 💼 LinkedIn: [eslamsalah55](https://linkedin.com/in/eslamsalah55)
- 🐱 GitHub: [eslamsalah5](https://github.com/eslamsalah5)
- 📱 Phone: +201013114472

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by Eslam Mohamed Salah</p>
</div>
