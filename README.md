# Ekim Demirci - SEO Specialist Website

A modern, high-performance Next.js website for an SEO Specialist, built with cutting-edge technologies and optimized for speed, SEO, and user experience.

## 🚀 Features

- **Next.js 14+** with App Router and Server-Side Rendering
- **TypeScript** for type safety
- **Tailwind CSS** for modern styling
- **Framer Motion** for smooth animations
- **Glassmorphism UI** with dark mode design
- **SEO Optimized** with metadata, sitemap, and robots.txt
- **Fully Responsive** design for all devices
- **Performance Focused** aiming for 100/100 Lighthouse scores
- **Admin Panel** with SEO management and page builder

## 📁 Project Structure

```
├── app/
│   ├── admin/              # Admin panel routes
│   │   ├── login/         # Admin login page
│   │   ├── seo/           # SEO management
│   │   └── pages/         # Page management
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── admin/             # Admin panel components
│   └── ...                # Public components
└── lib/
    └── utils.ts           # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)

## 🚦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Admin Panel Access

### Default Login Credentials

- **URL**: `/admin/login`
- **Email**: `admin@ekimdemirci.com`
- **Password**: `admin123`

⚠️ **Important**: Change these credentials in production by setting environment variables:
- `NEXT_PUBLIC_ADMIN_EMAIL`
- `NEXT_PUBLIC_ADMIN_PASSWORD`

### Admin Panel Features

- **Dashboard**: Overview with stats and recent activity
- **SEO Management**: 
  - Robots.txt editor
  - Sitemap manager
  - Page-level SEO optimization with real-time scoring
- **Page Builder**: Visual drag-and-drop page editor (coming soon)
- **Settings**: Site configuration

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository: `exburn35/ekimdemirci`
5. Click **"Deploy"**

Vercel will automatically:
- Detect Next.js framework
- Run build commands
- Deploy your site
- Set up automatic deployments on every push

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🎨 Design Features

- **Dark Mode**: Sleek dark theme by default
- **Glassmorphism**: Modern glass-effect UI elements
- **Smooth Animations**: Professional entry animations and scroll reveals
- **Gradient Accents**: Beautiful gradient overlays and text effects
- **Responsive Design**: Mobile-first approach

## 🔍 SEO Features

- Semantic HTML5 structure
- Dynamic metadata API
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Optimized image handling (ready for Next.js Image component)
- Admin-managed SEO settings

## 📄 Pages

- **Home** (`/`) - Hero, Trust Bar, Services, Case Study Teaser
- **About** (`/about`) - About page with tools, brands, and stats
- **Services** (`/services`) - Main services page
  - AI SEO (`/services/ai-seo`)
  - Technical SEO (`/services/technical-seo`)
  - On-Page SEO (`/services/on-page`)
  - Off-Page SEO (`/services/off-page`)
- **Case Studies** (`/case-studies`) - Coming soon
- **Blog** (`/blog`) - Coming soon
- **Contact** (`/contact`) - Coming soon
- **Admin** (`/admin`) - Admin panel (requires login)

## 🎯 Next Steps

1. Set up authentication (NextAuth.js recommended)
2. Add database integration (Prisma + PostgreSQL/MySQL)
3. Implement page builder with drag-and-drop
4. Add contact form backend
5. Set up email notifications
6. Configure custom domain on Vercel

## 📧 Contact

For questions or support, please contact: contact@ekimdemirci.com

---

Built with ❤️ using Next.js and Tailwind CSS
