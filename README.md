# OPSYRA

An AI powered project management tool for freelancers and developers who manage multiple clients and projects.
Opsyra helps you organize unstructured work (clients, projects, tasks and notes) in one workspace with AI
that works from your project data.

## Opsyra is for: Freelancers, Developers and Agency employees juggling multiple clients and deliverables.

### Features
-**AI Task Generation** - describe a project and AI generates an actionable task list
-**Note Summarization** - paste raw meeting notes and AI extracts key points and action items
-**Weekly Review** - AI analyzes your active projects and generates a downloadable PDF report

## Stack

- **Frontend** — Next.js 16 (App Router), React, TypeScript, Tailwind CSS
- **Backend** — Next.js Server Actions, Supabase (PostgreSQL)
- **Auth** — Supabase Auth with Row Level Security
- **AI** — Google Gemini 2.0 Flash

## Getting started

```bash
git clone https://github.com/srauf456/opsyra
cd opsyra
npm install
```

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_api_key

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

See [`docs/architecture.md`](docs/architecture.md) for database schema, auth flow, and component structure.

## Project status

Active development. Core features complete. AI features shipped. UI polish and additional integrations in progress.