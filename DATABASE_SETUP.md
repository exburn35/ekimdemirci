# Database Setup Guide

This guide will help you set up PostgreSQL with Prisma for the admin panel.

## Option 1: Supabase (Recommended - Free & Easy)

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Wait for the database to be provisioned (2-3 minutes)

### Step 2: Get Database URL
1. In your Supabase project, go to **Settings** → **Database**
2. Scroll down to **Connection string**
3. Copy the **URI** connection string
4. It will look like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

### Step 3: Configure Environment Variables
1. Open `.env` file in your project root
2. Add your database URL:
   ```
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```
3. Replace `[YOUR-PASSWORD]` with your actual database password

### Step 4: Run Migrations
```bash
npx prisma migrate dev --name init
```

### Step 5: Generate Prisma Client
```bash
npx prisma generate
```

## Option 2: Local PostgreSQL

### Step 1: Install PostgreSQL
- **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)
- **Mac**: `brew install postgresql`
- **Linux**: `sudo apt-get install postgresql`

### Step 2: Create Database
```bash
# Start PostgreSQL service
# Windows: Start service from Services
# Mac/Linux: brew services start postgresql

# Create database
createdb ekimdemirci

# Or using psql
psql -U postgres
CREATE DATABASE ekimdemirci;
\q
```

### Step 3: Configure Environment Variables
1. Open `.env` file
2. Add:
   ```
   DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/ekimdemirci"
   ```
3. Replace `yourpassword` with your PostgreSQL password

### Step 4: Run Migrations
```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Option 3: Vercel Postgres (For Production)

1. Go to your Vercel project dashboard
2. Navigate to **Storage** → **Create Database** → **Postgres**
3. Copy the connection string
4. Add it to Vercel environment variables as `DATABASE_URL`

## After Setup

### Create Admin User
Run this script to create your first admin user:

```bash
npx ts-node scripts/create-admin.ts
```

Or manually insert:
```sql
INSERT INTO users (id, email, password, role, name)
VALUES ('admin-1', 'admin@ekimdemirci.com', '$2b$10$hashedpassword', 'ADMIN', 'Admin User');
```

### Verify Connection
```bash
npx prisma studio
```

This will open Prisma Studio in your browser where you can view and edit your database.

## Troubleshooting

### Connection Issues
- Check your DATABASE_URL is correct
- Ensure database is running (for local)
- Check firewall settings (for cloud databases)

### Migration Issues
- Make sure database exists
- Check user permissions
- Try resetting: `npx prisma migrate reset`

## Next Steps

1. Update admin components to use API routes
2. Implement proper authentication
3. Set up environment variables in Vercel for production

