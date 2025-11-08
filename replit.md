# WAXA Digital Marketing Website

## Overview

This is a conversion-focused marketing website for WAXA, a digital marketing and growth agency. The application is built as a full-stack web application featuring a React frontend with shadcn/ui components and an Express backend. The site follows a clean, modern design approach inspired by European marketing agencies, emphasizing white space, clear CTAs, and strategic use of brand colors (blue #007bff and green #00c76a).

The website showcases WAXA's services through multiple pages including home, solutions, approach, advantages, references (case studies), FAQ, and contact. It includes a contact form with backend submission handling and in-memory storage for contact submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- Built with React 18+ and TypeScript
- Uses Wouter for lightweight client-side routing
- Vite as the build tool and development server
- Component-based architecture with reusable UI components

**UI Component System**
- shadcn/ui component library (New York style variant)
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for styling with custom design tokens
- Custom color palette defined in CSS variables supporting light/dark modes

**State Management**
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- Custom hooks for responsive behavior (useIsMobile, useToast)

**Page Structure**
The application follows a multi-page layout with:
- Sticky navigation that becomes solid on scroll
- Reusable section components (Hero, ProblemSolution, Approach, Advantages, References, FAQ, Contact)
- Consistent footer across all pages
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- ESM module system
- HTTP server creation with native Node.js http module

**API Design**
- RESTful endpoints under `/api` prefix
- JSON request/response format
- Request logging middleware for API routes
- Error handling with try-catch blocks

**Routes**
- `POST /api/contact` - Submit contact form
- `GET /api/contact-submissions` - Retrieve all contact submissions

**Request Processing**
- JSON body parsing with raw body preservation
- URL-encoded form data support
- Custom response logging that captures JSON responses

### Data Storage Solutions

**Current Implementation**
- In-memory storage using Map data structures
- MemStorage class implementing IStorage interface
- UUID generation for entity IDs using crypto.randomUUID()

**Database Schema (Drizzle ORM)**
The application is configured to use PostgreSQL via Drizzle ORM with schemas defined for:
- Users table (id, username, password)
- Contact submissions table (id, name, email, company, message, createdAt)

**Database Configuration**
- Drizzle Kit configured for PostgreSQL dialect
- Schema location: `./shared/schema.ts`
- Migrations output: `./migrations`
- Connection via DATABASE_URL environment variable
- Uses @neondatabase/serverless for database connectivity

Note: The application currently uses in-memory storage but has the infrastructure ready for PostgreSQL integration. The storage layer uses an interface pattern (IStorage) allowing easy swapping between MemStorage and a future database-backed implementation.

### Authentication and Authorization

Currently, the application does not implement authentication or authorization. The user schema exists in the database schema but is not actively used. Contact form submissions are publicly accessible without authentication.

### External Dependencies

**UI & Styling**
- shadcn/ui - Component library
- Radix UI - Headless UI primitives (@radix-ui/react-*)
- Tailwind CSS - Utility-first CSS framework
- class-variance-authority - Variant-based component styling
- Lucide React - Icon library

**Forms & Validation**
- React Hook Form - Form state management
- Zod - Schema validation
- @hookform/resolvers - Form validation resolvers
- drizzle-zod - Zod schema generation from Drizzle schemas

**Server & Database**
- Express - Web server framework
- Drizzle ORM - Type-safe ORM for PostgreSQL
- @neondatabase/serverless - Serverless PostgreSQL driver
- connect-pg-simple - PostgreSQL session store (not actively used)

**Development Tools**
- TypeScript - Type safety
- Vite - Build tool and dev server
- tsx - TypeScript execution for Node.js
- esbuild - JavaScript bundler for production builds
- @replit/vite-plugin-* - Replit-specific development plugins

**Fonts**
External Google Fonts loaded:
- DM Sans
- Geist Mono
- Fira Code
- Architects Daughter

**Asset Management**
- Images stored in `/attached_assets` directory
- Vite alias configured for `@assets` path
- Background images and branding assets included