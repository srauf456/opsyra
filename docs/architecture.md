# Opsyra Architecture

## Overview

Opsyra is a Next.js 16 App Router application with Supabase as the backend. Server Actions handle all data mutations. AI features
use Google Gemini via server-side calls so API keys never reach the client.

## Database Schema

Five tables, all protected by Row Level Security:

```
profiles    → extends auth.users, created automatically via trigger on signup
clients     → belongs to a user, has name, email, company
projects    → belongs to a user and optionally a client, has status and due_date
tasks       → belongs to a project and user, has status and ai_generated flag
notes       → belongs to a project and user, has content and ai_summary field
```

All tables enforce `user_id = auth.uid()` at the database level via RLS policies. Even if someone obtains the anon key, 
they cannot read another user's data.

## Auth Flow

```
Signup → Supabase creates auth.users row
       → Postgres trigger fires
       → profiles row auto-created with full_name from metadata
       → session stored in cookie
       → middleware reads cookie on every request
```

## Component Structure

```
app/
  (auth)/         → login, signup — public routes
  (dashboard)/    → all protected routes, share sidebar layout
    layout.tsx    → sidebar + mobile header
    dashboard/    → stat cards, recent projects, weekly review
    clients/      → full CRUD
    projects/     → full CRUD + AI task generation
      [id]/
        tasks/    → full CRUD + status toggle
        notes/    → full CRUD + AI summarization
  (landing)/      → public landing page components
  page.tsx        → landing page (redirects logged-in users to dashboard)
```

## AI Architecture

AI features run entirely on the server via Server Actions. The client never sees API keys.

```
Client clicks button
→ calls Server Action
→ action fetches relevant DB data (project title, tasks, notes)
→ injects data into Gemini prompt
→ Gemini returns structured response
→ action saves result to DB or returns to client
→ revalidatePath refreshes the page
```

The AI knows the user's actual data before responding — this is what differentiates it from a generic chatbot wrapper.

## Security

- RLS on every table — database-level protection
- Server Actions verify auth before every DB operation
- API keys in server-only environment variables
- Middleware protects all `/dashboard` routes