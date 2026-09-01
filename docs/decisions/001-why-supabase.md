# ADR 001 — Use Supabase as the backend

## Status
Accepted

## Context

Opsyra needed authentication, a relational database, and row-level access control for a multi-user application. 
The decision was which backend to use.

## Decision

Use Supabase.

## Reasons

- **Auth included** — email/password and OAuth out of the box, no separate auth service needed
- **Row Level Security** — data isolation enforced at the database level, not just in application code
- **Real Postgres** — full SQL, foreign keys, triggers, and constraints
- **Next.js SSR support** — `@supabase/ssr` package handles cookie-based sessions correctly with App Router
server components and middleware

## Alternatives considered

**Firebase** — rejected because it uses a document database (Firestore) which doesn't suit relational data like projects → tasks → notes. Also no equivalent to RLS.

**PlanetScale / Neon + custom auth** — rejected because it would require a separate auth solution and significantly more setup time.

## Tradeoffs

- Supabase free tier pauses inactive projects — acceptable for development, requires upgrade for production
- Less ecosystem than Firebase for mobile — not relevant for this project
- Vendor lock-in on auth — acceptable tradeoff for the speed and security benefits