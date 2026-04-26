import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  projectType:
    | 'Personal Training'
    | 'Academic'
    | 'Graduation'
    | 'Freelance'
    | 'Professional';
  demoUrl?: string;
  githubUrl?: string;
  fullDescription?: string;
  gallery?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  profileImage: string;
}

export interface Course {
  name: string;
  provider: string;
  date: string;
  url?: string;
}

export interface CV {
  name: string;
  type: string;
  url: string;
  icon: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  // Personal Information
  personalInfo: PersonalInfo = {
    name: 'Eslam Mohamed Salah',
    title: 'Full Stack .NET Developer',
    email: 'eslamsalah5346@gmail.com',
    phone: '+201013114472',
    location: 'Maadi, Cairo, Egypt — Ready to Relocate',
    linkedin: 'https://linkedin.com/in/eslamsalah55',
    github: 'https://github.com/eslamsalah5',
    summary:
      'Full Stack .NET Developer with a strong backend focus, specializing in ASP.NET Core, Clean Architecture, and Angular. Designed and built a production-ready B2B pharmaceutical distribution platform from scratch — 388+ REST endpoints, AI-powered product mapping, Redis caching, Hangfire background jobs, and Azure deployment — achieving 60–70% faster API response times and an 89% reduction in N+1 queries. Holds a B.Sc. in IT (GPA 3.63, Excellent with Honors) from Zagazig University, complemented by 5 months of intensive .NET Full Stack training at ITI. Passionate about clean, maintainable code, SOLID principles, and turning complex business requirements into reliable, scalable systems.',
    profileImage: 'assets/images/myPhoto.jpeg',
  };

  // Skills Data
  skills: Skill[] = [
    // Programming Languages
    {
      name: 'C#',
      icon: 'fab fa-microsoft',
      color: '#239120',
      category: 'Programming Languages',
    },
    {
      name: 'Dart',
      icon: 'text:Dart',
      color: '#a97bff',
      category: 'Programming Languages',
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js-square',
      color: '#f7df1e',
      category: 'Programming Languages',
    },
    {
      name: 'TypeScript',
      icon: 'text:TS',
      color: '#3178c6',
      category: 'Programming Languages',
    },
    {
      name: 'Java',
      icon: 'fab fa-java',
      color: '#ed8b00',
      category: 'Programming Languages',
    },
    {
      name: 'C++',
      icon: 'text:C++',
      color: '#00599c',
      category: 'Programming Languages',
    },

    // Backend Technologies
    {
      name: 'ASP.NET Core',
      icon: 'fab fa-microsoft',
      color: '#512bd4',
      category: 'Backend Technologies',
    },
    {
      name: 'ASP.NET MVC',
      icon: 'fas fa-code',
      color: '#512bd4',
      category: 'Backend Technologies',
    },
    {
      name: 'ASP.NET Web API',
      icon: 'fas fa-globe',
      color: '#512bd4',
      category: 'Backend Technologies',
    },
    {
      name: 'SQL Server',
      icon: 'fas fa-database',
      color: '#cc2927',
      category: 'Backend Technologies',
    },
    {
      name: 'MySQL',
      icon: 'fas fa-database',
      color: '#336791',
      category: 'Backend Technologies',
    },
    {
      name: 'JWT Auth',
      icon: 'fas fa-key',
      color: '#41b883',
      category: 'Backend Technologies',
    },
    {
      name: 'Google OAuth',
      icon: 'fab fa-google',
      color: '#4285f4',
      category: 'Backend Technologies',
    },
    {
      name: 'Facebook OAuth',
      icon: 'fab fa-facebook',
      color: '#1877f2',
      category: 'Backend Technologies',
    },
    {
      name: 'Identity',
      icon: 'fas fa-user-shield',
      color: '#ff6f00',
      category: 'Backend Technologies',
    },
    {
      name: 'RESTful API',
      icon: 'fas fa-server',
      color: '#6db33f',
      category: 'Backend Technologies',
    },
    {
      name: 'Entity Framework',
      icon: 'fas fa-code-branch',
      color: '#ff6f00',
      category: 'Backend Technologies',
    },
    {
      name: 'LINQ',
      icon: 'fas fa-link',
      color: '#0078d7',
      category: 'Backend Technologies',
    },
    {
      name: 'ADO.NET',
      icon: 'fab fa-microsoft',
      color: '#0078d7',
      category: 'Backend Technologies',
    },
    {
      name: 'Swagger',
      icon: 'fas fa-file-code',
      color: '#85ea2d',
      category: 'Backend Technologies',
    },
    {
      name: 'T-SQL',
      icon: 'fas fa-database',
      color: '#cc2927',
      category: 'Backend Technologies',
    },
    {
      name: 'Stored Procedures',
      icon: 'fas fa-cogs',
      color: '#cc2927',
      category: 'Backend Technologies',
    },
    {
      name: 'FluentValidation',
      icon: 'fas fa-check-circle',
      color: '#28a745',
      category: 'Backend Technologies',
    },
    {
      name: 'AutoMapper',
      icon: 'fas fa-exchange-alt',
      color: '#e67e22',
      category: 'Backend Technologies',
    },
    {
      name: 'RBAC',
      icon: 'fas fa-user-lock',
      color: '#8e44ad',
      category: 'Backend Technologies',
    },
    {
      name: 'ACID Transactions',
      icon: 'fas fa-shield-alt',
      color: '#17a2b8',
      category: 'Backend Technologies',
    },

    // Frontend Technologies
    {
      name: 'HTML5',
      icon: 'fab fa-html5',
      color: '#e34f26',
      category: 'Frontend Technologies',
    },
    {
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      color: '#1572b6',
      category: 'Frontend Technologies',
    },
    {
      name: 'JavaScript (ES6+)',
      icon: 'fab fa-js-square',
      color: '#f7df1e',
      category: 'Frontend Technologies',
    },
    {
      name: 'TypeScript',
      icon: 'text:TS',
      color: '#3178c6',
      category: 'Frontend Technologies',
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      color: '#dd0031',
      category: 'Frontend Technologies',
    },
    {
      name: 'RxJS',
      icon: 'fas fa-infinity',
      color: '#b7178c',
      category: 'Frontend Technologies',
    },
    {
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      color: '#7952b3',
      category: 'Frontend Technologies',
    },
    {
      name: 'jQuery',
      icon: 'text:jQ',
      color: '#06d6a0',
      category: 'Frontend Technologies',
    },
    // Mobile Development
    {
      name: 'Flutter',
      icon: 'fas fa-mobile-alt',
      color: '#02569b',
      category: 'Mobile Development',
    },
    {
      name: 'Dart',
      icon: 'text:Dart',
      color: '#a97bff',
      category: 'Mobile Development',
    },
    {
      name: 'BLoC Pattern',
      icon: 'fas fa-cubes',
      color: '#4caf50',
      category: 'Mobile Development',
    },
    {
      name: 'Provider',
      icon: 'fas fa-layer-group',
      color: '#2196f3',
      category: 'Mobile Development',
    },
    {
      name: 'Cubit',
      icon: 'fas fa-cube',
      color: '#ff9800',
      category: 'Mobile Development',
    },
    {
      name: 'Navigator 2.0',
      icon: 'fas fa-route',
      color: '#9c27b0',
      category: 'Mobile Development',
    },
    {
      name: 'Animations',
      icon: 'fas fa-magic',
      color: '#e91e63',
      category: 'Mobile Development',
    },
    {
      name: 'Custom Widgets',
      icon: 'fas fa-paint-brush',
      color: '#ff5722',
      category: 'Mobile Development',
    },
    {
      name: 'Responsive UI',
      icon: 'fas fa-mobile-alt',
      color: '#607d8b',
      category: 'Mobile Development',
    },
    {
      name: 'Internationalization',
      icon: 'fas fa-globe',
      color: '#795548',
      category: 'Mobile Development',
    },
    {
      name: 'Firebase Auth',
      icon: 'fas fa-fire',
      color: '#ffca28',
      category: 'Mobile Development',
    },
    {
      name: 'Stripe',
      icon: 'fas fa-credit-card',
      color: '#635bff',
      category: 'Mobile Development',
    },
    {
      name: 'PayPal',
      icon: 'fab fa-paypal',
      color: '#003087',
      category: 'Mobile Development',
    },
    {
      name: 'SQLite',
      icon: 'fas fa-database',
      color: '#003b57',
      category: 'Mobile Development',
    },
    {
      name: 'Hive',
      icon: 'fas fa-box',
      color: '#ff6b00',
      category: 'Mobile Development',
    },
    {
      name: 'Push Notifications',
      icon: 'fas fa-bell',
      color: '#4285f4',
      category: 'Mobile Development',
    },
    {
      name: 'Social Auth',
      icon: 'fab fa-google',
      color: '#4285f4',
      category: 'Mobile Development',
    },
    {
      name: 'Firebase Cloud Messaging',
      icon: 'fas fa-comment-dots',
      color: '#ffca28',
      category: 'Mobile Development',
    },
    {
      name: 'Machine Learning',
      icon: 'fas fa-brain',
      color: '#4caf50',
      category: 'Mobile Development',
    },

    // Development Tools
    {
      name: 'Visual Studio',
      icon: 'fab fa-microsoft',
      color: '#007acc',
      category: 'Development Tools',
    },
    {
      name: 'VS Code',
      icon: 'fas fa-code',
      color: '#007acc',
      category: 'Development Tools',
    },
    {
      name: 'Android Studio',
      icon: 'fab fa-android',
      color: '#3ddc84',
      category: 'Development Tools',
    },
    {
      name: 'Postman',
      icon: 'fas fa-mail-bulk',
      color: '#ff6b35',
      category: 'Development Tools',
    },
    {
      name: 'Git',
      icon: 'fab fa-git-alt',
      color: '#f05032',
      category: 'Development Tools',
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      color: '#181717',
      category: 'Development Tools',
    },
    {
      name: 'Firebase',
      icon: 'fas fa-fire',
      color: '#ffca28',
      category: 'Development Tools',
    },
    {
      name: 'Serilog',
      icon: 'fas fa-file-alt',
      color: '#2e7d32',
      category: 'Development Tools',
    },
    {
      name: 'Trello',
      icon: 'fas fa-terminal',
      color: '#0052cc',
      category: 'Development Tools',
    },
    {
      name: 'Notion',
      icon: 'fas fa-check-circle',
      color: '#1e7b85',
      category: 'Development Tools',
    },

    // Design & Development Concepts
    {
      name: 'OOP',
      icon: 'fas fa-cube',
      color: '#4caf50',
      category: 'Design & Development Concepts',
    },
    {
      name: 'SOLID',
      icon: 'fas fa-layer-group',
      color: '#2196f3',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Design Patterns',
      icon: 'fas fa-cogs',
      color: '#ff9800',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Clean Architecture',
      icon: 'fas fa-sitemap',
      color: '#9c27b0',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Repository Pattern',
      icon: 'fas fa-database',
      color: '#1abc9c',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Unit of Work',
      icon: 'fas fa-project-diagram',
      color: '#2980b9',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Result Pattern',
      icon: 'fas fa-check-double',
      color: '#27ae60',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Data Structures & Algorithms',
      icon: 'fas fa-network-wired',
      color: '#e74c3c',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Database Design',
      icon: 'fas fa-table',
      color: '#cc2927',
      category: 'Design & Development Concepts',
    },
    {
      name: 'MVC',
      icon: 'fas fa-building',
      color: '#607d8b',
      category: 'Design & Development Concepts',
    },
    {
      name: 'MVVM',
      icon: 'fas fa-puzzle-piece',
      color: '#795548',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Responsive Design',
      icon: 'fas fa-mobile-alt',
      color: '#e91e63',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Agile',
      icon: 'fas fa-rocket',
      color: '#ff5722',
      category: 'Design & Development Concepts',
    },
    {
      name: 'RAG AI',
      icon: 'fas fa-robot',
      color: '#00bcd4',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Caching Strategies',
      icon: 'fas fa-bolt',
      color: '#ff5722',
      category: 'Design & Development Concepts',
    },
    {
      name: 'API Versioning',
      icon: 'fas fa-code-branch',
      color: '#607d8b',
      category: 'Design & Development Concepts',
    },
    {
      name: 'Rate Limiting',
      icon: 'fas fa-tachometer-alt',
      color: '#e91e63',
      category: 'Design & Development Concepts',
    },

    // Cloud & DevOps
    {
      name: 'Redis',
      icon: 'fas fa-database',
      color: '#dc382d',
      category: 'Cloud & DevOps',
    },
    {
      name: 'Azure',
      icon: 'fab fa-microsoft',
      color: '#0078d4',
      category: 'Cloud & DevOps',
    },
    {
      name: 'Docker',
      icon: 'fab fa-docker',
      color: '#2496ed',
      category: 'Cloud & DevOps',
    },
    {
      name: 'Hangfire',
      icon: 'fas fa-clock',
      color: '#4a148c',
      category: 'Cloud & DevOps',
    },
    {
      name: 'Health Checks',
      icon: 'fas fa-heartbeat',
      color: '#e74c3c',
      category: 'Cloud & DevOps',
    },
    {
      name: 'CI/CD',
      icon: 'fas fa-sync-alt',
      color: '#ff6f00',
      category: 'Cloud & DevOps',
    },
  ];

  // Projects Data
  projects: Project[] = [
    {
      title:
        'GoDawa - Enterprise B2B Pharmaceutical Distribution Platform (Backend API)',
      description:
        'Production-ready ASP.NET Core 9 backend connecting pharmacies with warehouses across Egypt. Features 388 REST endpoints, Clean Architecture (4 layers), AI-powered Excel product mapping, optimistic-locking concurrency, external ERP integration via API Keys, Hangfire background jobs, Redis caching, and enterprise security with JWT + API Key dual authentication.',

      technologies: [
        'ASP.NET Core 9',
        'Entity Framework Core 9',
        'SQL Server',
        'Redis',
        'JWT Authentication',
        'API Key Auth',
        'Clean Architecture',
        'Repository Pattern',
        'Unit of Work',
        'Hangfire',
        'Firebase FCM',
        'AutoMapper',
        'FluentValidation',
        'Serilog',
        'Swagger',
        'API Versioning',
        'Rate Limiting',
        'QuestPDF',
        'ClosedXML',
      ],
      image: 'assets/images/godawa-api.jpg',
      projectType: 'Professional',
      fullDescription: `Architecture & Design:
• Clean Architecture with 4 strict layers: Domain → Application → Infrastructure → API (dependencies flow inward only)
• Result<T> pattern across all 37 services — OnSuccess/OnFailure/Map fluent chaining, no exceptions for expected failures
• Repository + Unit of Work: Lazy<T> repositories — no DB connection opened until actually used
• Decorator Pattern: LoggingRepositoryDecorator<T> auto-wired by Scrutor — transparent logging on every repo, zero modifications
• Global Exception Middleware: maps typed exceptions (NotFoundException, ValidationException…) to correct HTTP status codes
• Base entity hierarchy: BaseEntity → SoftDeletableEntity → BaseAuditableEntity — soft delete with global EF query filters

Authentication & Security:
• Dual authentication: JWT Bearer for users + custom ApiKeyAuthenticationHandler (X-API-Key) for warehouse ERPs
• 7 distinct user roles: SystemAdmin, WarehouseManager, PharmacyDoctor, TeleSales, SalesMan, DataEntry, SupportAgent
• Multi-device sessions: each login creates a UserSession row with device info (UAParser), per-session FCM token
• SessionValidationMiddleware: validates session.IsActive in DB on every authenticated request
• API Keys: hashed storage, per-warehouse scoping, fully revocable, usage logged
• Rate limiting per endpoint; 3-layer validation (Middleware + Filter + FluentValidation)

AI-Powered Product Mapping System (48 endpoints):
• Transforms warehouse Excel files → GoDawa catalog entries via 4 strategies in priority order:
  1. Barcode match (Regex: EAN13/EAN8/UPCA/Code128)
  2. Saved template match (cached 10 min)
  3. Fuzzy Levenshtein similarity: ≥0.75 high-confidence / ≥0.55 auto-match / ≥0.25 suggested
  4. Price discrepancy check (flags >30% deviation)
• Hangfire job with DisableConcurrentExecution(6h) + AutomaticRetry — handles 2,000–7,000+ items per session
• 7 duplicate resolution strategies: KeepFirst / KeepLast / HighestStock / LowestPrice / All / SkipAll / Manual
• Complete audit trail: immutable PriceHistory rows on every price change

Order Management & Concurrency:
• 5 order types: Normal, CallOrder, ClassicOrder, FileOrder, VoiceOrder
• Optimistic locking (RowVersion) + RetryHelper: 5 attempts, exponential backoff (50ms × 2^attempt + jitter)
• IdempotencyKey: client GUID prevents duplicate orders from double-taps and network retries
• OrderAutoShipmentService (IHostedService): polls every 10 min, auto-ships confirmed orders when delivery round starts
• Invoice export in Excel, CSV & PDF formats (QuestPDF + ClosedXML)

External ERP Integration (API Key):
• Full sync + Delta sync: warehouse ERPs push stock updates in batches of 100, rate-limited, queued via Hangfire
• Unresolved item queue: unmatched items enter ApiSyncUnresolved; admin resolution creates a MappingTemplate for future auto-match
• Order polling: ERPs pull new orders, acknowledge receipt, confirm with item-level adjustments or reject (auto-restores stock)
• All operations logged in ApiSyncLog with full audit trail

Sales & Performance Analytics (86+ statistics endpoints):
• SalesStatisticsService — 28 endpoints: daily/monthly/period revenue, per-pharmacy/warehouse/product breakdowns
• SalesPerformanceService — 16 endpoints: TeleSales order volume, revenue, targets, gap-to-target alerts
• SalesManPerformanceService — 17 endpoints: field visits, pharmacy registrations, region coverage
• DataEntryPerformanceService — 25 endpoints: approvals, mapping sessions, team leaderboards
• Pharmacy Target System: bottom-up aggregation (Pharmacy → Region → Governorate → Company), immutable history

Performance & Infrastructure:
• Redis distributed caching (ICacheService abstraction) with in-memory fallback — product details 5 min, seasonal 30 min, search uncached (real-time stock)
• SplitQuery globally + EnableRetryOnFailure(5) — resilient EF Core queries
• Serilog structured logging → Console + File + Seq; health checks for SQL + Redis
• 5 Hangfire workers, 2 dedicated queues (default + stock-sync), SQL Server storage
• 15 seed data files auto-run on first startup

By The Numbers:
• 388 REST endpoints (V1 + V2) across 34 controllers
• 52 domain entities, 34 enumerations, all with soft delete & full audit trail
• 37 application services, 73 interfaces, 30 repositories
• 119 DTO files, 34 FluentValidation validators, 19 AutoMapper profiles
• 46 EF Core migrations — auto-applied on startup
• 8 background jobs (4 recurring + 3 on-demand + 1 IHostedService)
• Deployed on Azure`,
    },
    {
      title: 'GoDawa - Pharmaceutical Distribution Platform (Admin Dashboard)',
      description:
        'Enterprise Angular 21 admin dashboard for the GoDawa platform. 67 standalone components, Signal-based state, 5-role RBAC with 70 granular permissions, and 17 feature modules covering orders, products, warehouses, AI product mapping, sales analytics, and pharmacy targets — deployed on Azure Static Web Apps.',

      technologies: [
        'Angular 21',
        'TypeScript',
        'Bootstrap 5',
        'Angular Signals',
        'RxJS',
        'JWT Authentication',
        'RBAC',
        'Lazy Loading',
        'Standalone Components',
        'Azure Static Web Apps',
      ],
      image: 'assets/images/godawa-angular.jpg',
      projectType: 'Professional',
      fullDescription: `Architecture & Design:
• 100% standalone components — zero NgModules, every component declares its own explicit imports
• Signal-based reactive state: services use signal() + computed() for derived values (no RxJS Subjects for state)
• Result<T> pattern: all service methods return Observable<Result<T>> via successResult/failureResult helpers
• Functional guards & interceptors — authGuard, permissionGuard(Permission[]), roleGuard, systemAdminGuard — tree-shakable
• Reusable request/mutate helpers eliminate boilerplate across all 25 services
• Dev-only logging: devLog/devError/devWarn are no-ops in production (esbuild tree-shaken)
• Lazy-loaded routes across all 17 feature modules

Authentication & RBAC (5 Roles × 70 Permissions):
• JWT with automatic token refresh via authInterceptor — 401 triggers refresh → retry original request → logout on failure
• 5 dashboard roles: SystemAdmin, TeleSales, SalesMan, DataEntry, SupportAgent
• 70 granular permissions enforced at route level (permissionGuard) AND component level (signal-based computed)
• Component visibility example: readonly canEdit = computed(() => perm.hasPermission(Permission.EDIT_PRODUCT))
• Multi-device session list — view and revoke active sessions

17 Feature Modules — 67 Standalone Components:
• Authentication (6 pages): Login, forgot/reset password, OTP verification, change password, active sessions
• Dashboard (1): Role-specific metrics, quick actions, auto-refresh
• Employees (8): CRUD, role assignment, per-role performance dashboards (TeleSales, SalesMan, DataEntry)
• Pharmacies (6): CRUD, registration approval workflow, doctor info, linked warehouses, order history
• Warehouses (12): CRUD, products, API keys, orders, pharmacies, sync history, unresolved ERP items
• Products (5): CRUD, Excel import, barcode, multi-warehouse pricing, price history
• Orders (3): 5 order types (Normal/Call/Classic/File/Voice), batch orders, order details & tracking
• Call Requests (4): FIFO telesales queue, active call tracking, my-active calls, statistics
• Returns (2) + Admin Returns (3): Complete pharmacy → warehouse → admin return workflow
• Product Mapping (8): Excel upload, session management, duplicate groups, audit trail, unlinked products, statistics, templates
• Product Price History (5): Price change log, session/product/warehouse price tracking
• Pharmacy Targets (3): Company, region, and governorate revenue target tracking
• Location Management (1): Governorate & region CRUD (SystemAdmin only)
• Upload Requests (2) + Profile (1): File tracking and user profile management

UI & Design System:
• Bootstrap 5.3.8 + Bootstrap Icons 1.13.1 (2,000+ icons)
• Custom purple theme: primary #4131A3 — 153 CSS custom properties (colors, shadows, gradients, spacing, transitions)
• RTL-ready: Arabic locale (ar-EG) registered
• Scoped styles: each component has its own .css file — no style leakage
• esbuild-based @angular/build with AOT compilation for fast production builds

By The Numbers:
• 67 standalone components across 17 feature modules
• 25 injectable services, 23 TypeScript model files
• 82 routes (top-level + child) with lazy loading
• 70 RBAC permissions across 5 roles
• 153 CSS custom properties
• Tested with Vitest 4.0.8 (jsdom)
• Deployed on Azure Static Web Apps`,
    },
    {
      title: 'Money Flow - Expense & Wallet Management',
      description:
        'Built a RESTful expense & wallet management API with ASP.NET Core 9 — multi-wallet support, ACID-compliant balance tracking, Google/Facebook OAuth, future-date expenses with automated reminders, and date-range financial analytics. Onion Architecture with Repository + Unit of Work, Serilog logging, and FluentValidation.',
      technologies: [
        'ASP.NET Core 9 Web API',
        'Entity Framework Core',
        'SQL Server',
        'JWT Authentication',
        'Google OAuth',
        'Facebook OAuth',
        'Repository Pattern',
        'Unit of Work',
        'Onion Architecture',
        'Serilog',
        'FluentValidation',
        'Swagger',
        'ACID Transactions',
      ],
      image: 'assets/images/paymind.jpg',
      projectType: 'Personal Training',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.mohamed.moneyflow',
      fullDescription: `User Authentication & Authorization:
• Secure JWT-based authentication system
• Google and Facebook OAuth integrations for simplified login
• Protected endpoints with role-based access control

Wallet Management:
• Create and manage multiple wallets for different purposes
• Track balance updates with ACID-compliant transactional handling
• Ensure data reliability and consistency across all operations

Expense Management:
• Add, update, and delete expenses with comprehensive category selection
• Future-date support for expenses with automated reminder notifications
• Image validation for expense attachments (receipts, invoices)
• Real-time expense tracking and categorization

Reporting & Analytics:
• Detailed financial reports by day, month, year, or custom date ranges
• Category-based spending breakdowns and analytics
• Spending averages and trends for better financial insights
• Visual representation of financial data patterns

Architecture & Quality:
• Onion Architecture for separation of concerns and scalability
• Repository Pattern and Unit of Work for clean data access abstraction
• SOLID principles implementation for maintainable and testable code
• Centralized global exception middleware for consistent error handling

Documentation & Monitoring:
• Comprehensive API documentation with Swagger/OpenAPI
• Structured logging using Serilog for monitoring and debugging
• Unified API response format across all endpoints
• FluentValidation for robust input validation`,
    },
    {
      title: 'FashionHub - Web API for E-Commerce Platform',
      description:
        'Built a RESTful e-commerce API with ASP.NET Core — product/category management, JWT authentication with role-based access (admin/customer), order tracking, and Stripe payment integration. Onion Architecture with Repository + Unit of Work.',
      technologies: [
        'ASP.NET Core Web API',
        'Entity Framework Core',
        'SQL Server',
        'JWT Authentication',
        'Repository Pattern',
        'Unit of Work',
        'Stripe',
        'Onion Architecture',
        'Swagger',
      ],
      image: 'assets/images/fashionhub.jpg',
      projectType: 'Personal Training',
      githubUrl: 'https://github.com/eslamsalah5/FashionHub-Api',
      fullDescription: `Product & Category Management:
• APIs to create, update, delete, and retrieve fashion products
• Category-based filtering and product search support

User Authentication & Authorization:
• JWT-based token authentication system
• Secured endpoints by roles (e.g., admin vs customer)

Order Management:
• APIs for creating orders, tracking order status, and fetching user order history

Architecture:
• Repository Pattern and Unit of Work for data access abstraction
• Organized solution structure for scalability and clarity
• Centralized exception handling and middleware

Extras:
• Swagger Documentation for API testing and exploration
• Validation on all endpoints and proper HTTP status codes`,
    },
    {
      title: 'Ra7ala — Full-Stack Transportation Management System',
      description:
        'Enterprise-grade TMS connecting passengers with bus companies across Egypt. .NET 9 Clean Architecture backend + Angular 19 SPA frontend, featuring Google Gemini AI chatbot with live trip context, Stripe payments with webhooks, optimistic concurrency to prevent overbooking, and 5-role RBAC. Live and deployed.',
      technologies: [
        'ASP.NET Core 9',
        'Angular 19',
        'Entity Framework Core 9',
        'SQL Server',
        'Clean Architecture',
        'JWT Authentication',
        'ASP.NET Core Identity',
        'Stripe API',
        'Google Gemini AI',
        'PrimeNG 19',
        'Bootstrap 5',
        'Repository Pattern',
        'Unit of Work',
        'Optimistic Concurrency',
        'MailKit / SMTP',
        'Swagger / OpenAPI',
        'RxJS',
        'Lazy Loading',
      ],
      image: 'assets/images/ra7ala.png',
      projectType: 'Graduation',
      githubUrl: 'https://github.com/Ra7alaa',
      demoUrl: 'https://ra7ala.runasp.net',
      fullDescription: `🌐 Live Demo: ra7ala.runasp.net

Overview:
Ra7ala is an enterprise-grade Transportation Management System (TMS) that connects passengers with bus companies across Egypt. The platform combines a high-performance .NET 9 backend with a modern Angular 19 frontend, featuring AI-driven support and secure Stripe payments.

Architecture:
• Backend: .NET 9 Clean Architecture (Domain → Application → Infrastructure → Presentation)
• Frontend: Angular 19 Standalone Components with lazy-loaded feature modules
• Auth: Stateless JWT + ASP.NET Core Identity — 5 roles: Owner, SuperAdmin, Admin, Driver, Passenger
• Unit of Work + Repository patterns for atomic, transactional data operations
• Soft-delete across all core entities for data safety and audit trails

🤖 AI Assistant — Ra7ala Bot:
• Powered by Google Gemini 2.5 Flash-Lite
• Receives a live summary of ALL upcoming trips, prices, and routes on every request
• Detects and responds in the user's language and dialect automatically (Arabic/English)
• Floating chat widget accessible from any page without navigation
• Markdown rendering: bold text, bullet lists, clean formatting
• Exponential backoff for API retries — handles rate limits gracefully
• Quick suggestion prompts to help users get started

💳 Financial Infrastructure (Stripe):
• PCI-compliant payments via Stripe Elements (client-secret flow)
• Server-side amount enforcement — prevents client-side price tampering
• Automated webhooks: syncs payment states (Success, Failure, Refund, Cancel) via payment_intent.succeeded
• Full refund pipeline: automated refund processing and booking reversal logic

🎫 Booking & Ticketing:
• Multi-step booking with real-time price calculation and station sequence validation
• Optimistic concurrency via [Timestamp] RowVersion on Trip entity — prevents overbooking under simultaneous requests
• Unique 6-character alphanumeric ticket codes with collision detection and timestamp-based fallbacks
• Sequential seat assignment for group bookings
• Digital tickets with status badges, booking history, and one-click cancellation

👥 5-Role System:
• Passenger: Search trips by city/date/seats, book, pay, view tickets, cancel
• Admin: Manage buses (amenities), drivers, routes (multi-station), trips, stations
• SuperAdmin: Full company control — fleet, staff, analytics, company profile
• Owner: Approve/reject company registrations, monitor all companies and platform activity
• Driver: View assigned trips, verify passenger bookings

🏗️ Frontend Architecture:
• 100% Standalone Components — no NgModules
• Role-based guards: roleGuard() factory protects routes per UserRole
• Auth interceptor: automatically attaches JWT Bearer token to all requests
• RxJS BehaviorSubject for reactive user state, language, and theme management
• Skeleton loaders, toast notifications (ngx-toastr), dedicated 403/404/500 error pages
• PrimeNG 19 + Bootstrap 5.3 — responsive across mobile, tablet, and desktop`,
    },
    {
      title: 'Examination System - Relational Database with Analytics',
      description:
        'A high-performance SQL Server database designed for managing online exams, grading, and student performance tracking. The system ensures data integrity and supports reporting through Power BI integration.',
      technologies: [
        'SQL Server',
        'T-SQL',
        'Stored Procedures',
        'ACID Transactions',
        'Power BI',
        'Database Normalization',
        'ERD Design',
      ],
      image: '',
      projectType: 'Academic',
      githubUrl: 'https://github.com/eslamsalah5/Exam_System_DB',
      gallery: [
        'assets/images/examination/diagram.png',
        'assets/images/examination/erd.png',
        'assets/images/examination/exam.png',
      ],
      fullDescription: `Schema & Design:
• Fully normalized schema to 3NF
• Core tables include: Students, Exams, Questions, Answers, Instructors, and Results
• Entity Relationship Diagram (ERD) for full database visualization

Dynamic Exam Assignment:
• Students are dynamically assigned to exams through relational joins
• Mapping of questions to multiple exams via pivot/join tables

Automated Grading System:
• Stored procedures to automatically evaluate and grade student answers
• Grading supports MCQ and True/False types with scalable logic

Performance & Integrity:
• Optimized T-SQL queries and indexing for high-performance operations
• ACID-compliant transactions for consistent inserts and updates
• Constraints and triggers for ensuring data accuracy

Reporting & Analytics:
• Power BI integration for visualizing performance reports and exam statistics
• Views and aggregate queries prepared for live dashboards

Security & Data Control:
• Role-based access planning considered for future API/portal integration
• Logical separation of instructor vs student operations in stored procedures`,
    },
    {
      title: 'Kito - Healthy Restaurant App',
      description:
        'A responsive Flutter application designed for users to browse healthy meals, track calories and grams, and place online orders with secure payment. The app focuses on nutritional transparency and smooth user experience across all devices.',
      technologies: [
        'Flutter',
        'Firebase',
        'Hive',
        'REST API',
        'Dio',
        'Clean Architecture',
        'Bloc',
        'PayPal',
        'Stripe',
        'Responsive UI',
      ],
      image: 'assets/images/kito.jpg',
      projectType: 'Freelance',
      demoUrl:
        'https://drive.google.com/file/d/1mZmb5LDvIvU02wtsnY5tYqMxWf-1Jvfl/view?usp=sharing',
      gallery: [
        'assets/images/kito/1.jpg',
        'assets/images/kito/2.jpg',
        'assets/images/kito/3.jpg',
        'assets/images/kito/4.jpg',
        'assets/images/kito/5.jpg',
        'assets/images/kito/6.jpg',
        'assets/images/kito/7.jpg',
        'assets/images/kito/8.jpg',
        'assets/images/kito/9.jpg',
        'assets/images/kito/10.jpg',
        'assets/images/kito/11.jpg',
        'assets/images/kito/12.jpg',
        'assets/images/kito/13.jpg',
        'assets/images/kito/14.jpg',
        'assets/images/kito/15.jpg',
        'assets/images/kito/16.jpg',
        'assets/images/kito/17.jpg',
        'assets/images/kito/18.jpg',
        'assets/images/kito/19.jpg',
        'assets/images/kito/20.jpg',
        'assets/images/kito/21.jpg',
        'assets/images/kito/22.jpg',
      ],
      fullDescription: `Menu & Meal Browsing:
• Interactive menu displaying meals with calorie and gram details
• Categorized sections (e.g., Salads, Drinks, Healthy Meals, Snacks)
• Visual meal cards with nutritional values and images

Cart & Ordering:
• Real-time cart with quantity control, price calculation, and order summary
• Checkout flow includes secure online payment using PayPal and Stripe (test mode supported)
• Confirmation screen and order status tracking

Authentication:
Firebase Auth with:
• Email/password login
• Magic link via email verification
• Google & Facebook social sign-in
• Protected routes and secure session management

Notifications:
• Push notifications for order updates and promotional offers

Architecture & Code Structure:
• Built using BLoC pattern for structured and testable state management
• Clean Architecture with separation of concerns between Presentation, Domain, and Data layers
• Modular and scalable project folder structure

Responsive Design:
• Fully responsive UI adapting to both mobile and tablet screens
• Consistent design system with scalable components and reusable widgets

Extra Features:
• Order history with previous items and repeat order functionality
• Error handling for failed payments and authentication issues
• Firebase security rules implemented to protect user data`,
    },
    {
      title: 'Epilepsy - Seizure Management Assistant',
      description:
        'A Flutter app to support epilepsy patients, doctors, and companions—enhancing safety, communication, and quality of life through real‑time alerts and guided assistance. This is my university graduation project from Zagazig University.',
      technologies: [
        'Flutter',
        'Firebase Auth',
        'Firebase Firestore',
        'Firebase Cloud Messaging',
        'MVVM',
        'Cubit',
        'Machine Learning Model',
      ],
      image: 'assets/images/epilepsy.jpg',
      projectType: 'Graduation',
      gallery: [
        'assets/images/epilepsy/patient.png',
        'assets/images/epilepsy/doctor.png',
        'assets/images/epilepsy/auth.png',
        'assets/images/epilepsy/pation-com.png',
      ],
      fullDescription: `Patient Features:
• Find Doctors: Browse and select top‑rated epilepsy specialists
• Medication Reminders: Scheduled notifications for prescribed medications
• Doctor Communication: In‑app chat with your doctor for condition‑related questions
• Chatbot Assistance: AI‑driven tips on managing epilepsy day‑to‑day

Doctor Features:
• Prescription Management: Create, update, and track patient prescriptions
• Medication Addition: Assign medications directly into a patient's profile
• Appointment Handling: Accept or decline appointment requests
• Patient Profiles: Access patient history and diagnostic data for informed care

Companion Features:
• Emergency Alerts: Instant push notifications via Firebase Cloud Messaging with the patient's GPS location during a seizure
• Chatbot Guidance: Step‑by‑step instructions on how to assist until professional help arrives

Architecture & Data:
• MVVM with clear separation (models / view‑models / views)
• Cubit for lightweight state management
• Machine Learning Model integration to analyze Arabic signal inputs and detect abnormal patterns
• Offline Support: Cached Firestore data syncs automatically when back online`,
    },
    {
      title: 'Bookly - Book Reading App',
      description:
        'A Flutter training app for browsing and reading books using Google Books API. Built with MVVM architecture, it provides a clean and structured reading experience with categorized views, offline support, and real-time search.',
      technologies: [
        'Flutter',
        'MVVM',
        'Cubit',
        'Hive',
        'Dio',
        'Google Books API',
      ],
      image: 'assets/images/bookly.jpg',
      projectType: 'Personal Training',
      githubUrl: 'https://github.com/eslamsalah5/bookly',
      gallery: [
        'assets/images/bookly/111.jpg',
        'assets/images/bookly/112.jpg',
        'assets/images/bookly/113.jpg',
        'assets/images/bookly/114.jpg',
        'assets/images/bookly/115.jpg',
        'assets/images/bookly/116.jpg',
      ],
      fullDescription: `Book Sections & Browsing:
• Displays categorized sections such as News Books, Featured Books, and Hottest Books to enhance book discovery and user engagement
• Clean, scrollable UI for horizontal and vertical book browsing

Book Details:
• Tapping on a book shows its full details: cover, title, author, rating, and a short description
• Preview and read books using the Google Books Viewer

Search Functionality:
• Real-time keyword search connected to the Google Books API via Dio
• Optimized search with debounce handling and loading indicators

Offline Support & Pagination:
• Implemented pagination to load and display books efficiently during scrolling
• Hive used to cache the list of books and display them offline
• Book content is only fetched when a user taps to view or read a book

Architecture & State Management:
• Built using MVVM for separation of UI and logic
• Cubit handles the state for various sections like book loading, search, and navigation
• Organized folder structure for scalability and maintainability

Limitations / Scope:
• No authentication or user profiles
• No deep filtering or category management
• Project focused on Flutter UI development, API integration, pagination, and local data caching`,
    },
    {
      title: 'Financial Dashboard - Responsive UI Design',
      description:
        'A Flutter-based dashboard interface designed to showcase financial metrics and layout components. This project focused solely on UI/UX design practices and responsive layout techniques, without integration to any backend or data source.',
      technologies: [
        'Flutter',
        'Responsive Design',
        'Custom Widgets',
        'LayoutBuilder',
        'MediaQuery',
      ],
      image: 'assets/images/financial-dashboard.jpg',
      projectType: 'Personal Training',
      githubUrl: 'https://github.com/eslamsalah5/responsive_dashboard',
      fullDescription: `UI Panels & Layout:
• Multiple visual panels representing KPIs like total revenue, transactions, and growth metrics
• Cards and containers styled to mimic real-world dashboards used in finance and admin panels
• Use of icons, charts (mocked), and color-coded elements to improve visual hierarchy

Responsive Design:
• Built with LayoutBuilder and MediaQuery to dynamically adjust layout for different screen sizes
• Separate UI flows for desktop, tablet, and mobile views
• Adaptive grid system to reposition panels based on available width

Custom Components:
• Created reusable widgets for dashboard tiles, side navigation, top bar, and summary cards
• Focused on modular and clean widget composition

Purpose & Scope:
• No connection to Firebase, APIs, or live data
• Used primarily to practice layout building, responsiveness, spacing, alignment, and visual consistency
• Helped reinforce design principles and UI scalability`,
    },
    {
      title: 'Weather App - City-Based Forecast Viewer',
      description:
        'A simple Flutter weather application built to learn how to consume APIs, implement search, and manage dynamic state. The app allows users to get the current and upcoming weather forecasts for a specific city.',
      technologies: ['Flutter', 'Cubit', 'Dio', 'Weather API', 'Search'],
      image: 'assets/images/weather-app.jpg',
      projectType: 'Personal Training',
      githubUrl: 'https://github.com/eslamsalah5/weather',
      fullDescription: `Search Functionality:
• Users can search for any city using a search bar
• On valid input, the app fetches real-time weather data and forecasts for that city

Current Weather Display:
• Displays temperature, weather condition (e.g., sunny, cloudy), and other essential data for the current day

Upcoming Forecasts:
• Shows upcoming weather conditions for several days (e.g., 7-day forecast)
• Structured layout to present each day's summary clearly

API Integration & State Management:
• Uses Dio to connect with a public weather API
• Cubit handles loading, success, and error states in the UI`,
    },
    {
      title: 'News Mobile App - API Integration Project',
      description:
        'A Flutter mobile application designed to consume and display real-time news from a public API. Developed primarily for educational purposes to practice API integration, data parsing, and basic UI state handling.',
      technologies: [
        'Flutter',
        'Cubit',
        'Dio',

        'NewsAPI',
        'Pagination',
        'Search',
        'WebView',
      ],
      image: 'assets/images/news-app.jpg',
      projectType: 'Personal Training',
      githubUrl: 'https://github.com/eslamsalah5/News-app',
      fullDescription: `News Categories & Browsing:
• Displays articles under multiple categories such as Local News, Global News, and General Topics
• UI lists articles with headline, image, and source

Search Functionality:
• Allows users to search for news articles using keywords
• Real-time API calls triggered on input change
• Displays relevant results in the same article format

Article Details:
• Tapping an article opens its detailed view
• Includes article title, description, image, and full source link
• Links are opened using WebView or redirected to browser for full content

API Integration & State Management:
• Used Dio to fetch articles from a public news API
• Implemented pagination to load articles in chunks for performance
• State managed using Cubit for clean separation between UI and logic

Purpose & Scope:
• Focused on learning API consumption, pagination, search, and clean UI rendering
• No authentication, advanced filtering, or saving features included
• Built to strengthen knowledge in real-time data handling and Flutter fundamentals`,
    },
  ];

  // Experience Data
  experience: Experience[] = [
    {
      title: 'Full-Stack Developer',
      company: 'الشركة المتخصصة لتوزيع الأدوية — المعادي، القاهرة',
      period: 'Nov 2025 - Apr 2026',
      description:
        'Architected and delivered a production-ready enterprise B2B pharmaceutical distribution platform connecting pharmacies with warehouses across Egypt. Single-handedly built the complete system: ASP.NET Core 9 backend (388 REST endpoints, Clean Architecture, 52 domain entities, 46 migrations), Angular 21 admin dashboard (67 components, 17 feature modules, 70-permission RBAC), and API infrastructure serving a Flutter mobile pharmacy app. Shipped an AI-powered product mapping engine, optimistic-locking concurrency system, external ERP integration via API Keys, and 86+ analytics endpoints.',
      technologies: [
        'ASP.NET Core 9',
        'Angular 21',
        'Entity Framework Core 9',
        'SQL Server',
        'Redis',
        'Firebase FCM',
        'Clean Architecture',
        'JWT & API Key Auth',
        'Hangfire',
        'Azure',
      ],
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      period: 'Aug 2023 - Present',
      description:
        'Developing innovative mobile and web solutions for clients worldwide. Specialized in Flutter mobile apps, .NET backend APIs, and Angular frontends. Successfully delivered multiple projects including social media platforms, e-commerce solutions, and multi-client applications.',
      technologies: [
        'Flutter',
        '.NET Core',
        'Angular',
        'Firebase',
        'SQL Server',
        'RESTful APIs',
      ],
    },
  ];

  // Education Data
  education: Education[] = [
    {
      degree:
        'B.Sc. in Information Technology (GPA: 3.63 - Excellent with Honors, Distinction)',
      institution: 'Zagazig University',
      period: '2020 - 2024',
      description:
        'Graduated with Excellent with Honors and Distinction. Specialized in software engineering and web development.',
    },
  ];

  // Internships Data
  internships: Experience[] = [
    {
      title:
        'Intensive Training Program - .NET Full Stack Web Development track',
      company: 'Information Technology Institute (ITI), Zagazig Branch',
      period: 'Nov. 2024 - Apr. 2025',
      description:
        'Participated in an intensive training program focused on .NET full stack web development, covering advanced topics in ASP.NET Core, Angular, and SQL Server.',
      technologies: [
        'C#',
        'SQL Server',
        'ASP.NET Core MVC',
        'ASP.NET Core Web API',
        'Entity Framework',
        'HTML5',
        'CSS3',
        'Bootstrap',
        'JavaScript',
        'TypeScript',
        'Angular',
        'LINQ',
        'Presentation Skills',
      ],
    },
    {
      title: 'Mobile Development using Flutter (120 Hours)',
      company: 'Information Technology Institute (ITI)',
      period: 'Jul. 2022 - Sep. 2022',
      description: 'Covered Dart, Flutter, Firebase, and project development.',
      technologies: ['Dart', 'Flutter', 'Firebase'],
    },
  ];

  // Online Courses Data
  courses: Course[] = [
    {
      name: 'TypeScript Fundamentals - Mahara-Tech ITI',
      provider: 'Mahara-Tech ITI',
      date: 'Mar. 2025',
      url: 'https://drive.google.com/file/d/1HceI2ci90Igy1P6QvI0DRlWrhvaW9iT9/view',
    },
    {
      name: 'Payment Integration by PayPal & Stripe (Udemy - Tharwat Samy)',
      provider: 'Udemy - Tharwat Samy',
      date: 'Aug. 2024',
      url: 'https://drive.google.com/file/d/1RNxuwoOctdltx5E21amrs4KOsRr8XFk2/view',
    },
    {
      name: 'Deep Dive into Clean Architecture in Flutter (Udemy - Tharwat Samy)',
      provider: 'Udemy - Tharwat Samy',
      date: 'Jun. 2024',
      url: '', // Link not provided yet
    },
    {
      name: 'Flutter Advanced Course Bloc and MVVM Pattern (Udemy - Tharwat Samy)',
      provider: 'Udemy - Tharwat Samy',
      date: '2024',
      url: 'https://drive.google.com/file/d/1UIwjGcJVTFzagidqrIkVOylV7ys8E-Hd/view',
    },
    {
      name: 'Database Fundamentals - Mahara-Tech ITI',
      provider: 'Mahara-Tech ITI',
      date: 'Aug. 2022',
      url: 'https://drive.google.com/file/d/18pSfvRIHOj8KpCiBZ8hFpgo93jw_GKgc/view',
    },
    {
      name: 'CCNA - Cisco Certified Network Associate',
      provider: 'Cisco',
      date: 'Aug. 2022',
      url: 'https://drive.google.com/file/d/1X9lerlxKiFDFLqO8qmUvV66vbO9E5k08/view',
    },
  ];

  // CV Downloads
  cvs: CV[] = [
    {
      name: 'Flutter Developer CV',
      type: 'Mobile Development',
      url: 'assets/cv/Eslam Salah Flutter CV.pdf', // Add your Flutter CV here
      icon: 'fas fa-mobile-alt',
      color: '#02569b',
    },
    {
      name: '.NET Developer CV',
      type: 'Web Development',
      url: 'assets/cv/Eslam_Salah_FullStack__NET_Developer_CV.pdf',
      icon: 'fab fa-microsoft',
      color: '#512bd4',
    },
  ];

  constructor() {}

  // Getter methods
  getPersonalInfo(): PersonalInfo {
    return this.personalInfo;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }

  getSkillCategories(): string[] {
    return [...new Set(this.skills.map((skill) => skill.category))];
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getExperience(): Experience[] {
    return this.experience;
  }

  getInternships(): Experience[] {
    return this.internships;
  }

  getEducation(): Education[] {
    return this.education;
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getCVs(): CV[] {
    return this.cvs;
  }

  // Update methods
  updatePersonalInfo(info: Partial<PersonalInfo>): void {
    this.personalInfo = { ...this.personalInfo, ...info };
  }

  addSkill(skill: Skill): void {
    this.skills.push(skill);
  }

  updateSkill(index: number, skill: Partial<Skill>): void {
    if (index >= 0 && index < this.skills.length) {
      this.skills[index] = { ...this.skills[index], ...skill };
    }
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  addExperience(exp: Experience): void {
    this.experience.unshift(exp); // Add to beginning (most recent first)
  }

  addCourse(course: Course): void {
    this.courses.unshift(course); // Add to beginning (most recent first)
  }
}
