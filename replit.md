# Internships24

## Overview
A React-based career resource platform for South Africa, helping graduates, students, and unemployed youth find verified internships and learnerships.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **Build Tool**: Vite
- **Data Fetching**: TanStack React Query

## Project Structure
```
src/
├── components/
│   ├── home/        # Homepage sections (Hero, Categories, CTA, FAQ, etc.)
│   ├── layout/      # Header, Footer, Layout wrapper
│   └── ui/          # shadcn/ui components
├── data/            # Static data (blog posts, internships)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components (Index, About, Blog, Contact, etc.)
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Running the Project
The dev server runs on port 5000:
```bash
npm run dev
```

## Deployment
Configured for static deployment. Build outputs to `dist/` folder.

## Recent Changes
- 2024-12-29: Migrated from Lovable to Replit environment
  - Updated Vite config to use port 5000
  - Configured allowedHosts for Replit proxy
  - Removed lovable-tagger plugin
  - Set up static deployment configuration
