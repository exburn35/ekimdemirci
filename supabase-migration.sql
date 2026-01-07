-- Supabase Migration Script
-- Run this in Supabase SQL Editor after creating your database

-- Create Page table
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

-- Create SEO Config table
CREATE TABLE IF NOT EXISTS "seo_config" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL UNIQUE,
    "content" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create Sitemap Entries table
CREATE TABLE IF NOT EXISTS "sitemap_entries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "lastModified" TIMESTAMP(3) NOT NULL,
    "changeFrequency" TEXT NOT NULL,
    "priority" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create Users table
CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ADMIN',
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "Page_slug_idx" ON "Page"("slug");
CREATE INDEX IF NOT EXISTS "Page_published_idx" ON "Page"("published");
CREATE INDEX IF NOT EXISTS "sitemap_entries_url_idx" ON "sitemap_entries"("url");

-- Insert default robots.txt configuration
INSERT INTO "seo_config" (id, type, content, "updatedAt")
VALUES (
    'robots-default',
    'robots',
    'User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://ekimdemirci.com/sitemap.xml',
    NOW()
)
ON CONFLICT (type) DO NOTHING;

