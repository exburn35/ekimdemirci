# Quick Start Guide - Database Setup

## 🚀 Fastest Way: Supabase (Recommended)

### Step 1: Create Supabase Database (5 minutes)

1. Go to [supabase.com](https://supabase.com) and sign up
2. Click **"New Project"**
3. Fill in:
   - **Name**: ekimdemirci
   - **Database Password**: (choose a strong password - save it!)
   - **Region**: Choose closest to you
4. Click **"Create new project"**
5. Wait 2-3 minutes for setup

### Step 2: Get Connection String

1. In your Supabase project, go to **Settings** → **Database**
2. Scroll to **Connection string** section
3. Copy the **URI** (not the other options)
4. It looks like:
   ```
   postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres
   ```

### Step 3: Configure Local Environment

1. Create `.env` file in project root (copy from `.env.example` if it exists)
2. Add your database URL:
   ```env
   DATABASE_URL="postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres"
   ```
   **Replace `[YOUR-PASSWORD]` with your actual password!**

### Step 4: Run Database Migrations

```bash
# Generate Prisma Client
npm run db:generate

# Create database tables
npm run db:migrate

# This will ask for a migration name - type: "init"
```

### Step 5: Create Admin User

```bash
# Install ts-node if needed
npm install -D ts-node

# Run the admin creation script
npx ts-node scripts/create-admin.ts
```

Or set environment variables:
```bash
ADMIN_EMAIL=admin@ekimdemirci.com ADMIN_PASSWORD=yourpassword npx ts-node scripts/create-admin.ts
```

### Step 6: Verify Setup

```bash
# Open Prisma Studio to view your database
npm run db:studio
```

This opens a browser at `http://localhost:5555` where you can see all your tables!

## ✅ You're Done!

Now your admin panel will:
- ✅ Save robots.txt to database
- ✅ Save sitemap entries to database  
- ✅ Save page SEO data to database
- ✅ Persist all changes

## 🔧 For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add:
   - `DATABASE_URL` = your Supabase connection string
   - `NEXT_PUBLIC_ADMIN_EMAIL` = your admin email
   - `NEXT_PUBLIC_ADMIN_PASSWORD` = your admin password
4. Redeploy your project

## 🆘 Troubleshooting

**"Can't reach database server"**
- Check your DATABASE_URL is correct
- Make sure you replaced `[YOUR-PASSWORD]` with actual password
- Verify Supabase project is active

**"Migration failed"**
- Make sure database exists
- Check connection string format
- Try: `npx prisma db push` instead of migrate

**"Prisma Client not generated"**
- Run: `npm run db:generate`
- Restart your dev server

## 📚 Next Steps

- Set up proper authentication (NextAuth.js)
- Add more admin users
- Implement page builder with database storage

