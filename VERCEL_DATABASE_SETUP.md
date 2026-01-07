# Quick Guide: Set Up Free Database for Vercel

## 🚀 Step-by-Step: Supabase (Recommended - Free & Easy)

### Step 1: Create Supabase Account (2 minutes)

1. Go to **[supabase.com](https://supabase.com)**
2. Click **"Start your project"** or **"Sign up"**
3. Sign up with GitHub (easiest) or email
4. Verify your email if needed

### Step 2: Create a New Project (3 minutes)

1. Click **"New Project"** button
2. Fill in the form:
   - **Name**: `ekimdemirci` (or any name you like)
   - **Database Password**: Create a strong password (SAVE THIS - you'll need it!)
   - **Region**: Choose closest to you (e.g., `US East`, `Europe West`)
3. Click **"Create new project"**
4. Wait 2-3 minutes for the database to be created

### Step 3: Get Your Database Connection String (1 minute)

1. Once your project is ready, go to **Settings** (gear icon in left sidebar)
2. Click **"Database"** in the settings menu
3. Scroll down to **"Connection string"** section
4. Find the **"URI"** tab (not "Session mode" or "Transaction mode")
5. Copy the connection string - it looks like:
   ```
   postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
   ```
6. **IMPORTANT**: Replace `[YOUR-PASSWORD]` with the password you created in Step 2

### Step 4: Add to Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in the left sidebar
4. Add a new variable:
   - **Key**: `DATABASE_URL`
   - **Value**: Paste your connection string (with password replaced)
   - **Environment**: Select **Production**, **Preview**, and **Development** (or just Production if you prefer)
5. Click **"Save"**

### Step 5: Run Database Migrations

After setting up the database, you need to create the tables. You have two options:

#### Option A: Using Supabase SQL Editor (Easiest)

1. In Supabase, go to **"SQL Editor"** (left sidebar)
2. Click **"New query"**
3. Run this command to create the tables:

```sql
-- Create tables
CREATE TABLE IF NOT EXISTS "Page" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "ogImage" TEXT,
    "canonicalUrl" TEXT
);

CREATE TABLE IF NOT EXISTS "seo_config" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL UNIQUE,
    "content" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS "sitemap_entries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "lastModified" TIMESTAMP(3) NOT NULL,
    "changeFrequency" TEXT NOT NULL,
    "priority" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS "Page_slug_idx" ON "Page"("slug");
CREATE INDEX IF NOT EXISTS "Page_published_idx" ON "Page"("published");
CREATE INDEX IF NOT EXISTS "sitemap_entries_url_idx" ON "sitemap_entries"("url");
```

4. Click **"Run"** to execute

#### Option B: Using Prisma Migrate (Advanced)

If you have Prisma CLI access, you can run:
```bash
npx prisma migrate deploy
```

### Step 6: Create Your First Admin User

1. In Supabase SQL Editor, run:

```sql
-- Create admin user (password: admin123 - change this!)
-- Password hash for "admin123" using bcrypt
INSERT INTO "users" (id, email, password, role, name)
VALUES (
    'admin-1',
    'admin@ekimdemirci.com',
    '$2a$10$rOzJqZqZqZqZqZqZqZqZqOqZqZqZqZqZqZqZqZqZqZqZqZqZqZqZq',
    'ADMIN',
    'Admin User'
)
ON CONFLICT (email) DO NOTHING;
```

**⚠️ IMPORTANT**: The password hash above is a placeholder. You should generate a proper hash using bcrypt. For now, you can use the login page which will hash passwords properly.

### Step 7: Redeploy on Vercel

1. Go to your Vercel project
2. Click **"Deployments"** tab
3. Click the **"..."** menu on the latest deployment
4. Click **"Redeploy"**
5. Or simply push a new commit to trigger a new deployment

## ✅ You're Done!

Your database is now connected to Vercel. The admin panel will be able to:
- Save robots.txt to database
- Save sitemap entries to database
- Save page SEO data to database
- All changes will persist!

## 🔐 Security Note

Make sure your `DATABASE_URL` in Vercel is set to:
- **Production** environment only (or Production + Preview if you want)
- Never commit it to GitHub (it's already in `.gitignore`)

## 🆘 Troubleshooting

**"Connection refused"**
- Check your DATABASE_URL is correct
- Make sure you replaced `[YOUR-PASSWORD]` with actual password
- Verify Supabase project is active

**"Table doesn't exist"**
- Run the SQL migration in Step 5
- Check table names match exactly (case-sensitive)

**"Authentication failed"**
- Verify password in connection string is correct
- Check if Supabase project is paused (free tier pauses after inactivity)

