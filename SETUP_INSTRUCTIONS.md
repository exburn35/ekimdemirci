# Complete Setup Instructions

## 🔧 Fixed Issues

1. ✅ **Login Page Layout** - Now has its own layout without main site navigation
2. ✅ **Database Setup** - Prisma with PostgreSQL models ready
3. ✅ **API Routes** - All admin routes connected to database

## 📋 Step-by-Step Setup

### 1. Fix Login Page (Already Done)
The login page now has its own layout that excludes the main site navigation.

### 2. Set Up Database

#### Option A: Supabase (Recommended - Free)

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up and create a new project
   - Wait 2-3 minutes for setup

2. **Get Connection String**
   - Go to **Settings** → **Database**
   - Copy the **URI** connection string
   - Format: `postgresql://postgres.xxx:[PASSWORD]@xxx.supabase.co:6543/postgres`

3. **Create `.env` file** in project root:
   ```env
   DATABASE_URL="postgresql://postgres.xxx:[YOUR-PASSWORD]@xxx.supabase.co:6543/postgres"
   NEXT_PUBLIC_ADMIN_EMAIL="admin@ekimdemirci.com"
   NEXT_PUBLIC_ADMIN_PASSWORD="admin123"
   ```

4. **Run Migrations**
   ```bash
   npm run db:generate
   npm run db:migrate
   # When prompted, name it: "init"
   ```

5. **Create Admin User**
   ```bash
   npx ts-node scripts/create-admin.ts
   ```

#### Option B: Local PostgreSQL

1. **Install PostgreSQL** (if not installed)
2. **Create Database**
   ```bash
   createdb ekimdemirci
   ```

3. **Create `.env` file**:
   ```env
   DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/ekimdemirci"
   ```

4. **Run Migrations** (same as above)

### 3. Verify Setup

```bash
# Open Prisma Studio to view database
npm run db:studio
```

This opens at `http://localhost:5555` - you can see all your tables!

### 4. Test the Admin Panel

1. Start dev server: `npm run dev`
2. Go to: `http://localhost:3000/admin/login`
3. Login with:
   - Email: `admin@ekimdemirci.com`
   - Password: `admin123`

## 🚀 Deploy to Vercel

### Before Deploying:

1. **Set Environment Variables in Vercel**:
   - Go to Project Settings → Environment Variables
   - Add:
     - `DATABASE_URL` = your Supabase connection string
     - `NEXT_PUBLIC_ADMIN_EMAIL` = your admin email
     - `NEXT_PUBLIC_ADMIN_PASSWORD` = your admin password

2. **Push to GitHub** (already done)

3. **Vercel will automatically deploy**

### After Deployment:

1. **Run migrations on production**:
   - You can use Vercel's CLI or connect to your database directly
   - Or use Supabase's SQL editor to run migrations

## 📁 Database Models Created

- **Page** - Stores page content (visual builder data) and SEO
- **SEOConfig** - Stores robots.txt and sitemap config
- **SitemapEntry** - Individual sitemap URLs
- **User** - Admin users (for future authentication)

## ✅ What's Working Now

- ✅ Login page (standalone, no navigation)
- ✅ Database models defined
- ✅ API routes for all admin functions
- ✅ Components connected to API
- ✅ Prisma client generated

## 🔜 Next Steps

1. Connect to actual database (Supabase or local)
2. Run migrations
3. Test admin panel functionality
4. Set up proper authentication (NextAuth.js recommended)

## 🆘 Troubleshooting

**Login page shows navigation:**
- Clear browser cache
- Restart dev server
- Check that `app/admin/login/layout.tsx` exists

**Database connection errors:**
- Verify DATABASE_URL is correct
- Check database is running
- Try `npx prisma db push` instead of migrate

**Prisma client errors:**
- Run `npm run db:generate`
- Restart dev server
- Check `generated/prisma` folder exists

