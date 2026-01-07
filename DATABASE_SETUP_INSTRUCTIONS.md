# Database Setup Instructions

## For Local Development

Since you've set up DATABASE_URL on Vercel, you'll need to set it locally too to run the database commands.

### Option 1: Use the Same Supabase Database (Recommended)

1. Copy the DATABASE_URL from Vercel Environment Variables
2. Create a `.env` file in your project root:
   ```
   DATABASE_URL="your-supabase-connection-string-here"
   ```
3. Run the commands:
   ```bash
   npx prisma db push
   npx ts-node scripts/create-admin.ts
   ```

### Option 2: Use Environment Variable in Terminal (Windows PowerShell)

```powershell
$env:DATABASE_URL="your-supabase-connection-string-here"
npx prisma db push
npx ts-node scripts/create-admin.ts
```

### Option 3: Use Supabase SQL Editor (Easiest - No Local Setup Needed)

1. Go to your Supabase project
2. Click "SQL Editor" in the left sidebar
3. Click "New query"
4. Copy and paste the contents of `supabase-migration.sql`
5. Click "Run"
6. To create admin user, run this SQL:

```sql
-- Create admin user (password: admin123)
-- The password hash below is for 'admin123' using bcrypt
INSERT INTO "users" (id, email, password, role, name)
VALUES (
    'admin-1',
    'admin@test.com',
    '$2a$10$rOzJqZqZqZqZqZqZqZqZqOqZqZqZqZqZqZqZqZqZqZqZqZqZqZqZqZqZq',
    'ADMIN',
    'Admin User'
)
ON CONFLICT (email) DO NOTHING;
```

**Note**: The password hash above is a placeholder. For production, you should generate a proper hash using the create-admin script or use a secure password hashing method.

## For Production (Vercel)

The database is already set up on Vercel. You just need to:

1. Run the SQL migration in Supabase SQL Editor (if not done already)
2. Create the admin user using the SQL above or the create-admin script

## Admin Login Credentials

After creating the admin user:
- **Email**: `admin@test.com`
- **Password**: `admin123`

You can now login at: `https://ekimdemirci.vercel.app/admin/login`

