# Sip & Play - Commercial Kitchens

A modern, fully responsive landing page for commercial kitchen solutions built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- **Modular Component Architecture**: Reusable, maintainable components
- **Centralized Configuration**: Easy content updates via `lib/site-config.ts`
- **Modern Animations**: Smooth transitions and eye-catching effects
- **Fully Responsive**: Optimized for all screen sizes
- **WhatsApp Integration**: Floating button and CTA links
- **Image Gallery**: Interactive gallery with hover effects
- **SEO Optimized**: Meta tags and Open Graph support
- **TypeScript**: Full type safety

## Project Structure

```
sipnplay/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Stats.tsx
│   ├── ComingSoon.tsx
│   ├── Gallery.tsx
│   ├── WhyChooseUs.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── index.ts           # Component exports
└── lib/
    └── site-config.ts     # Site configuration
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### Update Site Content

Edit `lib/site-config.ts` to customize:

- **Company Information**: Name, tagline, WhatsApp number
- **Hero Section**: Title, description, CTA text
- **Services**: Add/remove/edit services with icons
- **Stats**: Update statistics
- **Features**: Modify "Why Choose Us" items
- **Gallery**: Add your project images
- **Coming Soon Section**: Customize teaser message
- **Footer**: Update tagline and copyright

### Change WhatsApp Number

```typescript
// In lib/site-config.ts
company: {
  whatsappNumber: '+94770757575', // Update this
}
```

### Add New Service

```typescript
// In lib/site-config.ts
import { NewIcon } from 'lucide-react';

services: [
  {
    icon: NewIcon,
    title: 'Your Service Title',
    description: 'Your service description',
  },
]
```

### Update Gallery Images

Replace Unsplash URLs with your own images:

```typescript
// In lib/site-config.ts
gallery: [
  {
    image: '/path/to/your/image.jpg', // Local or external URL
    alt: 'Image description',
    title: 'Image title',
  },
]
```

For external images, add the domain to `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'yourdomain.com',
    },
  ],
}
```

### Customize Colors

The site uses a gradient color scheme. To change colors, search for:
- `from-orange-500` / `to-yellow-500` (primary gradient)
- `from-blue-500` (secondary accent)
- `from-purple-600` / `to-pink-600` (coming soon section)

Replace with your brand colors in Tailwind format.

### Add New Section

1. Create new component in `components/`:
   ```typescript
   // components/NewSection.tsx
   export function NewSection() {
     return (
       <section className="py-24 px-4">
         {/* Your content */}
       </section>
     );
   }
   ```

2. Export in `components/index.ts`:
   ```typescript
   export { NewSection } from './NewSection';
   ```

3. Add to `app/page.tsx`:
   ```typescript
   import { NewSection } from '@/components';

   // Add in return statement
   <NewSection />
   ```

## Components Overview

- **AnimatedBackground**: Floating gradient orbs
- **Header**: Sticky navigation with logo and contact button
- **Hero**: Main landing section with animated title
- **Services**: Grid of service offerings
- **Stats**: Company statistics (projects, experience, etc.)
- **ComingSoon**: Teaser for upcoming eCommerce platform
- **Gallery**: Interactive image grid with hover effects
- **WhyChooseUs**: Feature highlights with checkmarks
- **CTA**: Call-to-action section with WhatsApp link
- **Footer**: Company info and copyright
- **WhatsAppButton**: Floating action button

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React features
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first CSS
- **Lucide React**: Icon library
- **Turbopack**: Fast bundler (Next.js default)

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily on Vercel:

```bash
npx vercel
```

Or any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Docker

## Performance Optimizations

- Image optimization with Next.js Image component
- Component-level code splitting
- CSS-in-JS with Tailwind (no runtime overhead)
- Lazy loading for images
- Optimized fonts with Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Sip & Play 2024

## Support

For questions or customization help, contact via WhatsApp: +94770757575

---

Built with ❤️ using Next.js and React
