# Deployment Guide

## Deploying to Vercel

### Step 1: Connect GitHub Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create an account)
2. Click **"Add New Project"**
3. Import your GitHub repository: `exburn35/ekimdemirci`
4. Vercel will automatically detect it's a Next.js project

### Step 2: Configure Project Settings

Vercel will auto-detect these settings:
- **Framework Preset**: Next.js
- **Root Directory**: `./` (root)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at: `https://ekimdemirci-*.vercel.app`

### Step 4: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain: `ekimdemirci.com`
3. Follow Vercel's DNS configuration instructions

### Step 5: Environment Variables (if needed)

If you add authentication or database later:
1. Go to Project Settings → Environment Variables
2. Add any required variables (e.g., `DATABASE_URL`, `NEXTAUTH_SECRET`)

## Automatic Deployments

Once connected, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Run builds automatically

## Manual Deployment

You can also trigger deployments manually:
1. Go to your project on Vercel
2. Click **"Deployments"** tab
3. Click **"Redeploy"** on any deployment

