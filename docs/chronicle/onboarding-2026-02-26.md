# gmx_website_feb_2026 — Developer Onboarding Guide

## Welcome

Welcome to the GyanMatrix Technologies codebase! This project is an enterprise-grade platform for AI engineering and Global Capability Center (GCC) operations, built for the 2026 AI era. It serves as the public-facing website and marketing platform for GyanMatrix, showcasing their expertise in AI-powered solutions, decision intelligence, and global talent scaling.

## Prerequisites

To get started with this project, you'll need the following:

- Node.js version 19 or higher
- A modern web browser (Chrome, Firefox, Safari, or Edge)

The project uses the following key technologies:

- React 19.0.0
- Vite 5.1.4
- TypeScript 5.2.2
- Lucide React 0.475.0

## Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/vasanthgyan/gmx_website_feb_2026.git
   ```

2. **Install dependencies**:
   ```
   cd gmx_website_feb_2026
   npm install
   ```

3. **Set up environment configuration**:
   - Create a `.env.local` file in the project root.
   - Add the following environment variable:
     ```
     GEMINI_API_KEY=your_gemini_api_key
     ```

4. **Run the development server**:
   ```
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Project Structure Walkthrough

The project follows a standard React-based file structure. Here's a breakdown of the main directories and their purposes:

```
gmx_website_feb_2026/
├── components/
│   └── Contains reusable UI components
├── constants/
│   └── Stores application-wide constants and configuration
├── pages/
│   └── Defines the main application pages and their content
├── types/
│   └── Declares the TypeScript types used throughout the codebase
├── App.tsx
│   └── The main application component
├── index.tsx
│   └── The entry point of the application
├── package.json
│   └── Defines the project dependencies and scripts
└── vite.config.ts
    └── Configures the Vite development and build environment
```

## Key Concepts

The codebase uses the following key concepts and terminology:

- **Global Capability Center (GCC)**: A dedicated offshore engineering team that delivers high-value capabilities for global enterprises.
- **AI Agent Development**: The process of building autonomous AI systems that can handle customer service, sales automation, and domain-specific solutions.
- **Decision Intelligence**: AI-powered analytics that drive strategic decision-making through predictive engines, risk modeling, and optimization.
- **AI Product Development**: The end-to-end process of building AI-powered products and services for enterprise customers.

## Development Workflow

1. **Branch naming convention**: Use the following format for branch names: `[type]/[issue-or-feature-description]`, where `[type]` can be `feature`, `fix`, `refactor`, or `chore`.

2. **Running tests**: This project does not have any automated tests set up. You can manually test the application by running `npm run dev` and interacting with the different pages and components.

3. **Building the app**: To build the production-ready version of the app, run:
   ```
   npm run build
   ```
   This will create a `dist` folder with the optimized, static files.

4. **Deploying the app**: The project does not have any built-in deployment scripts. You can deploy the `dist` folder to your preferred hosting platform.

## Common Tasks

### Adding a new API endpoint

The project does not have any backend API endpoints. It's a purely client-side application that consumes data from the `constants.tsx` file.

### Adding a new page/route

1. Create a new file in the `pages/` directory, e.g., `pages/NewPage.tsx`.
2. Define the new page component and its content.
3. Import the new page component in `App.tsx`.
4. Add the new route to the `navLinks` array in `components/Layout.tsx`.

### Modifying the database schema

This project does not use a database. All data is stored in the `constants.tsx` file.

## Where to Find Things

- **Main entry point**: `index.tsx`
- **Routes and pages**: `App.tsx`, `pages/` directory
- **Reusable components**: `components/` directory
- **Constants and configuration**: `constants.tsx`
- **TypeScript types**: `types.ts`
- **Vite configuration**: `vite.config.ts`

## FAQ & Gotchas

1. **Why is there no backend or API?** This project is a client-side-only web application. All data is hardcoded in the `constants.tsx` file. In a real-world scenario, you would likely need to integrate with backend APIs to fetch dynamic data.

2. **How do I add new sections or features?** You can add new pages in the `pages/` directory and import them in `App.tsx`. For new components, create them in the `components/` directory and use them in the relevant pages.

3. **Why is there no testing setup?** The project does not have any automated testing set up. You'll need to manually test the application by running `npm run dev` and interacting with the different pages and components.

## Onboarding Difficulty Map

| Module/Area | Difficulty (1-5) | Estimated Learning Time | Key Files to Read | Prerequisites |
|------------|-----------------|----------------------|-------------------|--------------|
| React Fundamentals | 2 | 2-4 hours | `App.tsx`, `index.tsx`, `components/Layout.tsx` | Basic JavaScript, TypeScript |
| Routing and Navigation | 3 | 2-4 hours | `App.tsx`, `components/Layout.tsx` | React Fundamentals |
| Styling and Theming | 3 | 2-4 hours | `constants.tsx`, `components/Layout.tsx` | React Fundamentals |
| Data Management | 2 | 1-2 hours | `constants.tsx` | React Fundamentals |
| Deployment and CI/CD | 4 | 4-8 hours | `package.json`, `vite.config.ts` | React Fundamentals, Deployment Experience |

## Recommended First Tasks

Here are five "good first issue" tasks for a new developer, ordered from easiest to hardest:

| # | Task | Difficulty | Estimated Hours | Files to Touch | What You'll Learn |
|---|------|-----------|----------------|---------------|-------------------|
| 1 | Update the "About Us" page with new content | 2 | 2-4 hours | `pages/About.tsx` | React Fundamentals, Styling |
| 2 | Add a new "Testimonials" section to the Home page | 3 | 4-8 hours | `pages/Home.tsx`, `components/` | React Fundamentals, Styling, Component Composition |
| 3 | Implement a search functionality for the Insights page | 4 | 8-12 hours | `pages/Insights.tsx`, `components/` | React Fundamentals, State Management, Filtering |
| 4 | Add a new "Contact" form and handle form submissions | 4 | 8-12 hours | `pages/Contact.tsx`, `components/`, `constants.tsx` | React Fundamentals, Form Handling, API Integration |
| 5 | Integrate a CMS (e.g., Contentful) to manage blog post content | 5 | 12-20 hours | `pages/Insights.tsx`, `types.ts`, `constants.tsx` | React Fundamentals, API Integration, Content Management |

These tasks cover a range of complexity, from simple content updates to more advanced features like search and CMS integration. As you complete each task, you'll gain a deeper understanding of the project's codebase and the key concepts used throughout the application.