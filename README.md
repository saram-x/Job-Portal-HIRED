# HIRED - Job Portal Platform

A comprehensive full-stack job portal connecting recruiters and candidates with advanced security features and admin management.

## 🚀 Features

### For Candidates
- **Job Search & Discovery** - Browse and filter job opportunities
- **Application Management** - Apply to jobs with resume upload
- **Saved Jobs** - Bookmark interesting positions
- **Application Tracking** - Monitor application status in real-time
- **Profile Management** - Manage personal information and preferences

### For Recruiters
- **Job Posting** - Create and manage job listings
- **Company Management** - Add company profiles with branding
- **Application Review** - Review and manage candidate applications
- **Status Updates** - Update application status (Applied, Interviewing, Hired, Rejected)
- **Candidate Communication** - Track and manage recruitment pipeline

### For Admins
- **User Management** - Ban/unban users, delete accounts
- **Content Moderation** - Review and manage all job postings
- **Suspicious Job Detection** - AI-free pattern-based scam detection
- **Platform Analytics** - Monitor platform usage and statistics
- **Security Controls** - Advanced admin tools for platform safety

## 🔍 Suspicious Job Detection System

Our innovative **AI-free detection system** automatically identifies potential scam jobs using pattern matching:

- **High Salary Red Flags** - Unrealistic salary mentions
- **Scam Keywords** - "Get rich quick", "Easy money", MLM patterns
- **Crypto/Trading Scams** - Bitcoin, forex, investment schemes
- **Structural Issues** - Short descriptions, external links, vague titles
- **Company Verification** - Suspicious company names and missing info

## 🛡️ Security Features

- **Role-Based Access Control** - Candidates, Recruiters, Admins
- **Secure Authentication** - Clerk-powered OAuth and email/password
- **File Upload Security** - Safe resume and logo handling
- **Input Validation** - Comprehensive server-side validation
- **Protected Routes** - Route-level security implementation

## 🏗️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful and accessible component library
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Backend
- **Express.js** - Fast, unopinionated web framework
- **Node.js** - JavaScript runtime environment
- **RESTful API** - Clean and intuitive API design

### Database & Authentication
- **Supabase** - PostgreSQL database with real-time features
- **Clerk** - Complete authentication and user management
- **File Storage** - Secure file handling for resumes and logos

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Git** - Version control with GitHub integration
- **VS Code** - Development environment setup

## 📊 Database Schema

### Core Entities

**Users** (Clerk Managed)
- User profiles, roles, authentication tokens

**Jobs**
```sql
- id, title, description, location, company_id
- recruiter_id, requirements, salary_range
- isOpen, created_at, updated_at
```

**Companies**
```sql
- id, name, logo_url, description
- website, created_at
```

**Applications**
```sql
- id, job_id, candidate_id, name
- experience, skills, education, resume_url
- status (applied/interviewing/hired/rejected)
```

**Saved Jobs**
```sql
- id, user_id, job_id, created_at
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### 1. Clone Repository
```bash
git clone https://github.com/saram-x/HIRED.git
cd HIRED
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 3. Environment Configuration

Create `.env` file in project root:
```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Server Configuration
VITE_API_URL=http://localhost:3001
```

Create `.env` file in server directory:
```env
# Clerk Server
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Server
PORT=3001
```

