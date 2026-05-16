# Manoj Kumar Sharma - Enterprise Full Stack Engineer Portfolio

A production-grade, world-class portfolio website for an enterprise full-stack engineer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Premium Design
- **Enterprise Aesthetic**: Inspired by Stripe, Linear, Vercel, and Supabase
- **Dark Theme**: Professional dark color scheme with subtle gradients
- **Glassmorphism**: Subtle glass effects without overdoing it
- **Smooth Animations**: Framer Motion for polished, performant animations
- **Responsive Design**: Perfect mobile, tablet, and desktop experience

### Sections
1. **Navbar**: Sticky navigation with scroll detection and mobile hamburger menu
2. **Hero Section**: Animated typewriter effect, dashboard visualization, and premium CTA buttons
3. **About**: Engineering-focused highlights of expertise
4. **Experience**: Interactive timeline with 3 enterprise roles
5. **Projects**: 6 featured projects with GitHub links and tech badges
6. **Architecture**: System design patterns and layered architecture explanation
7. **Skills**: Categorized technical skills with 8+ categories
8. **Contact**: Multiple contact methods and social links
9. **Footer**: Modern SaaS-style footer with navigation and tech stack

### Technical Excellence
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Shadcn/ui** components
- **Lucide React** icons
- **SEO Optimized** with proper metadata, Open Graph, and Twitter cards
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Optimized build, lazy loading, image optimization

## 📋 Content

### Experience
- **Enola Tech** - Jr. Software Developer (May 2026 - Present)
- **Khichad Technologies** - Software Developer Trainee
- **Cloud Play Solutions** - Software Developer Intern

### Tech Stack
**Backend**: Java 21, Spring Boot, Node.js, Express.js, PostgreSQL
**Frontend**: React, Next.js, TypeScript, Tailwind CSS
**Mobile**: Flutter, Dart
**Enterprise**: Liferay DXP, RBAC, Offline-first Architecture
**DevOps**: Docker, Git, CI/CD, Maven, Ant

### Contact
- **Email**: msharma27096@gmail.com
- **GitHub**: https://github.com/manojkumarsharma511
- **LinkedIn**: https://linkedin.com/in/manoj-kumar-sharma
- **Location**: Sikar, Rajasthan, India

## 🛠️ Tech Stack

```json
{
  "framework": "Next.js 15 (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS v4",
  "animation": "Framer Motion",
  "components": "Shadcn/ui",
  "icons": "Lucide React",
  "fonts": "Onest + Geist Mono (Google Fonts)",
  "deployment": "Vercel"
}
```

## 📦 Installation

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Full Local Setup & Run Guide

**Prerequisites**
- Node.js 18+ (recommended 20+): https://nodejs.org
- Git

**Step-by-step**

```bash
# 1. Clone
git clone <repository-url>
cd developer-portfolio-creation

# 2. Install deps (npm)
npm install --legacy-peer-deps

# 3. Run dev server
npm run dev
```

Open http://localhost:3000 in browser.

(Use `npm run build && npm start` for production preview)

## 🚀 Deployment

### Deploy to Vercel
```bash
# Push to GitHub first
git add .
git commit -m "chore: production portfolio build"
git push

# Then deploy on Vercel dashboard or use CLI
vercel
```

### Or use Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## 📝 Configuration

### Personal Details
Update these files with your information:

1. **`lib/constants.ts`** - All personal data:
   - Contact information
   - Experience details
   - Projects
   - Skills

2. **`app/layout.tsx`** - SEO metadata:
   - Title
   - Description
   - Keywords
   - Open Graph tags

3. **`components/hero.tsx`** - Hero section text and typewriter roles

## 🏗️ Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Sticky navigation
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Experience timeline
│   ├── projects.tsx        # Projects grid
│   ├── architecture.tsx    # System architecture
│   ├── skills.tsx          # Skills categories
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer
│   └── ui/                 # Shadcn/ui components
├── hooks/
│   └── useScrollActive.ts  # Custom scroll hook
├── lib/
│   ├── constants.ts        # Content constants
│   ├── types.ts            # TypeScript types
│   └── utils.ts            # Utility functions
├── styles/
│   └── globals.css         # Tailwind styles
└── public/
    ├── robots.txt          # SEO robots file
    └── favicon.ico         # Favicon
```

## 🎨 Design System

### Colors
- **Background**: Slate-950 (#0f172a)
- **Primary**: Blue-600 (#2563eb)
- **Accent**: Cyan-400 (#22d3ee)
- **Text**: Slate-100 (#f1f5f9)
- **Borders**: Slate-700/800

### Typography
- **Font Family**: Onest (main), Geist Mono (code)
- **Heading Sizes**: 6xl, 5xl, 4xl, 3xl, 2xl, xl, lg
- **Line Heights**: Proper spacing for readability

### Animations
- Typewriter effect on hero
- Scroll-triggered animations on sections
- Hover effects on interactive elements
- Float animations on dashboard cards
- Smooth transitions throughout

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

### Environment Variables
No environment variables required for basic deployment. All content is in `lib/constants.ts`.

## 🧪 Testing Responsive Design

The portfolio is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large**: 1280px and up

Test using browser DevTools or on actual devices.

## ♿ Accessibility

Features:
- Semantic HTML structure
- ARIA labels on interactive elements
- Proper heading hierarchy
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on buttons

## 📊 SEO

Includes:
- Meta titles and descriptions
- Open Graph tags for social sharing
- Twitter card metadata
- robots.txt for search engines
- Semantic HTML
- Mobile-friendly design
- Fast performance (Lighthouse optimized)

## 🐛 Troubleshooting

### Build Issues
```bash
# If you get peer dependency warnings:
npm install --legacy-peer-deps

# Clear Next.js cache
rm -rf .next
npm run build
```

### Dev Server Issues
```bash
# Kill existing process and restart
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9
npm run dev
```

## 📄 License

This portfolio is open source and available for personal use. Feel free to use it as a template for your own portfolio.

## 🤝 Support

For issues or questions:
- Email: msharma27096@gmail.com
- GitHub Issues: [Report an issue](https://github.com/manojkumarsharma511)

## 🎯 Future Enhancements

Potential additions:
- [ ] Blog/Articles section
- [ ] Case studies with detailed project breakdowns
- [ ] Interactive code examples
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] Dark/Light mode toggle
- [ ] Multi-language support

---

Made with ❤️ using Next.js, TypeScript, and Tailwind CSS.
Deployed on Vercel.
