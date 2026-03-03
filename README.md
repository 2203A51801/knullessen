# KnullEssen

A clean “dev vault” website to host apps (name, description, download link) with an admin dashboard for CRUD.

## Tech
- Next.js (App Router) + TypeScript
- Turso (libSQL / SQLite)
- Cookie-based admin session

## Setup (Local)

### 1) Install
```bash
npm install
```

### 2) Env
Copy `.env.example` to `.env.local` and fill:
- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`
- `ADMIN_PASSWORD` (set to `Knull@123`)
- `ADMIN_COOKIE_SECRET` (use a long random string)

### 3) Create DB table in Turso
Run this SQL in Turso:
```sql
CREATE TABLE IF NOT EXISTS apps (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  download_url TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_apps_created_at ON apps(created_at DESC);
```

### 4) Run
```bash
npm run dev
```

Open:
- Home: `http://localhost:3000`
- Admin: `http://localhost:3000/admin`

## Deploy on Render

- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm run start`
- Add these environment variables:
  - `TURSO_DATABASE_URL`
  - `TURSO_AUTH_TOKEN`
  - `ADMIN_PASSWORD=Knull@123`
  - `ADMIN_COOKIE_SECRET=<long random>`