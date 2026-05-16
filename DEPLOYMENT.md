# Portfolio Setup & Deployment Guide

## Quick Start

### 1. Local Development
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Open browser
open http://localhost:3000
```

## Configuration

### Update Personal Information

All content is managed in `lib/constants.ts`. Update these sections:

#### Contact Information
```typescript
export const CONTACT_INFO = {
  email: "msharma27096@gmail.com",
  github: "https://github.com/manojkumarsharma511",
  linkedin: "https://linkedin.com/in/manoj-kumar-sharma",
  location: "Sikar, Rajasthan, India",
  phone: "+91 XXXXXXXXXX",
}
```

#### Experience
Edit the `EXPERIENCES` array to update your work history:
```typescript
{
  id: "company-id",
  company: "Company Name",
  role: "Your Role",
  duration: "Start - End",
  description: "Brief description",
  highlights: ["Highlight 1", "Highlight 2"],
  technologies: ["Tech 1", "Tech 2"],
  projects: ["Project 1"],
}
```

#### Projects
Update the `PROJECTS` array with your portfolio projects:
```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Short description",
  overview: "Detailed overview",
  highlights: ["Feature 1", "Feature 2"],
  technologies: ["Tech 1", "Tech 2"],
  github: "https://github.com/...",
  caseStudy: "https://...",
}
```

#### Skills
Edit the `SKILLS` array to add/update your technical skills.

### Update SEO Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  // ... other metadata
}
```

### Hero Section Text

In `components/hero.tsx`, update the `roles` array:
```typescript
const roles = [
  "Your Role 1",
  "Your Role 2",
  "Your Role 3",
]
```

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "chore: production portfolio"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Custom Domain** (optional)
   - In Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration steps

### Option 2: Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect GitHub for auto-deploy

### Option 3: Self-Hosted

1. **Build for production**
```bash
npm run build
npm start
```

2. **Deploy to your server**
```bash
# Using PM2 (recommended)
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

3. **Set up reverse proxy (Nginx)**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Setup

### Development
```bash
npm run dev
# Runs on http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

### Clean Build
```bash
rm -rf .next node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

## Customization

### Colors
Edit `styles/globals.css`:
```css
:root {
  --background: 15 23 42;
  --foreground: 241 245 250;
  --primary: 59 130 246;
  /* ... more colors */
}
```

### Fonts
Update in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google"

const yourFont = YourFont({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})
```

### Animations
Adjust duration and delays in component files using Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

### Responsiveness Breakpoints
Tailwind CSS breakpoints are pre-configured:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority
/>
```

### Font Optimization
Fonts are already optimized via Google Fonts API in `app/layout.tsx`.

### Build Optimization
- Tree-shaking is enabled
- CSS is minified
- JavaScript is compressed
- Next.js automatically optimizes images

## Analytics & Monitoring

### Vercel Analytics
- Automatically included in Vercel deployment
- Shows performance metrics
- No setup needed

### Google Analytics (Optional)
Add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
```

## SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter cards
- [x] robots.txt
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast load times
- [x] Sitemap ready

To add sitemap:
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
```

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next

# Reinstall deps
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Try build again
npm run build
```

### Dev Server Not Starting
```bash
# Check if port 3000 is in use
lsof -i :3000

# Kill existing process and retry
npm run dev
```

### Styling Issues
- Clear browser cache
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Check if Tailwind CSS is properly imported in `app/layout.tsx`

### Performance Issues
- Analyze bundle: `npm install -g next-bundle-analyzer`
- Check Core Web Vitals in Vercel Dashboard
- Use Next.js Performance Profiler

## Security Best Practices

✅ Already Implemented:
- No sensitive data in code
- Environment variables support
- Content Security Policy ready
- CORS headers configurable
- No eval() or dangerous functions

### Additional Recommendations:
1. Use HTTPS everywhere
2. Keep dependencies updated: `npm audit`
3. Use rate limiting on deployed server
4. Set up DDoS protection (Cloudflare, Vercel)
5. Monitor error logs regularly

## Maintenance

### Regular Updates
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Audit security
npm audit
```

### Backup & Version Control
```bash
# Commit regularly
git add .
git commit -m "Update portfolio"
git push

# Tag releases
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **TypeScript**: https://www.typescriptlang.org
- **Vercel Docs**: https://vercel.com/docs

## License

This portfolio is open source. Feel free to use it as a template.

---

Last Updated: May 2026
