# CLAUDE.md — Vyombotics Educational Website

> This file is Claude Code's memory for the Vyombotics project.
> Read this fully before making any changes to the codebase.

---

## 🚀 Project Overview

**Project Name:** Vyombotics  
**Type:** Educational Website (Tech & Robotics Learning Platform)  
**Owner:** Nihal Jaiswal  
**Status:** ✅ LIVE — Deployed to Vercel  
**Goal:** A fully functional, modern educational website to teach students about AI, Robotics, Python, Web Dev, App Dev, 3D Design, IoT, and more.

---

## 🌐 Live URLs

| Environment | URL |
|---|---|
| Production | https://vyombotics.vercel.app |
| GitHub Repo | https://github.com/Nihal108-bi/vyombotics |
| Vercel Dashboard | https://vercel.com/nihal108-bis-projects/vyombotics |

> Auto-deploys on every `git push` to `main`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Icons:** lucide-react v1.x
- **Language:** TypeScript / TSX
- **Package Manager:** npm
- **Deployment:** Vercel (free tier)

> **Important:** Tailwind v4 requires `@tailwindcss/vite` in `vite.config.ts`. Without it, responsive classes (`md:`, `lg:`, `xl:`) are NOT generated — the site will look stuck on mobile layout. Do NOT remove this plugin.

> **Important:** lucide-react v1.x removed all brand/social icons. Use these substitutes:
> - LinkedIn → `Briefcase`
> - GitHub → `Code2`
> - Twitter/X → `X`
> - YouTube → `PlayCircle`
> - Instagram → `Camera`

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0f1e` (deep dark navy) |
| Primary Accent | `#3b82f6` (electric blue) |
| Secondary Accent | `#8b5cf6` (neon purple) |
| Text Primary | `#ffffff` |
| Text Muted | `#94a3b8` |
| Card Background | `rgba(255,255,255,0.05)` |
| Card Border | `rgba(255,255,255,0.1)` |

**Style:** Dark futuristic / space theme. Glassmorphism cards, neon glowing borders, smooth hover animations.

---

## 📁 Project Structure

```
vyombotics/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       ← Sticky, blur on scroll, mobile hamburger (fixed)
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Courses.tsx      ← Imports from src/data/courses.ts
│   │   ├── Teachers.tsx     ← Imports from src/data/teachers.ts
│   │   ├── WhyVyombotics.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── teachers.ts      ← Typed Teacher interface + all 7 members
│   │   └── courses.ts       ← Typed Course interface + all 8 courses
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── CLAUDE.md
├── .gitignore
├── package.json
├── vite.config.ts           ← @tailwindcss/vite plugin registered here
└── tsconfig.app.json
```

---

## 👥 Team Members (Teachers Data)

> Stored in `src/data/teachers.ts` — always edit data there, never hardcode in TSX.
> The `Teacher` interface is exported from that file — import it in components.

```ts
// src/data/teachers.ts exports:
export interface Teacher {
  id: number;
  name: string;
  role: string;
  expertise: string[];   // array, NOT dot-separated string
  bio: string;
  avatar: string;
  featured: boolean;     // true = full-width featured card at top
  badge: string;         // display label shown in the badge chip
  badgeColor: string;    // blue | green | purple | pink | orange | cyan | violet
  linkedin: string | null;
  github: string | null;
}
```

| ID | Name | Role | badgeColor | featured |
|---|---|---|---|---|
| 1 | Prof. Neeraj Singh | Academic Head | purple | **true** |
| 2 | Nihal Jaiswal | AI & GenAI Expert | blue | false |
| 3 | Srishti Soni | IoT & Embedded Systems Expert | cyan | false |
| 4 | Rishabh Yadav | Python & AI Expert | green | false |
| 5 | Aanchal Chaurasiya | Web Development Expert | pink | false |
| 6 | Neeraj Kumar | Robotics & Automation Expert | orange | false |
| 7 | Anmol Verma | 3D Design Expert | violet | false |

---

## 📚 Courses Offered

> Stored in `src/data/courses.ts` — always edit data there, never hardcode in TSX.

| Course | Level |
|---|---|
| Robotics Fundamentals | Beginner |
| Artificial Intelligence | Intermediate |
| Python Programming | Beginner |
| Web Development | Beginner |
| App Development | Intermediate |
| 3D Designing | Intermediate |
| Machine Learning | Advanced |
| Electronics & IoT | Intermediate |

All images: `https://images.unsplash.com/photo-{ID}?w=400&fit=crop`

---

## ✅ Website Sections Checklist

- [x] Navbar (sticky, blur on scroll, mobile hamburger menu with slide-down animation)
- [x] Hero (headline, CTA buttons, background image, floating icons)
- [x] Stats Bar (Students, Courses, Teachers, Hands-On)
- [x] Courses Section (8 course cards, responsive grid)
- [x] Teachers Section (7 members, Prof. Singh featured full-width)
- [x] Why Vyombotics (4 feature cards with icons)
- [x] Testimonials (3 student reviews)
- [x] Contact / Join Waitlist CTA (email form)
- [x] Footer (logo, links, copyright)
- [x] Responsive layout (mobile + tablet + desktop)
- [x] Production build passing (zero TypeScript errors)
- [x] Deployed to Vercel

---

## 🔧 Key Rules for Claude Code

1. **Never hardcode teacher or course data in TSX.** Always use `src/data/teachers.ts` and `src/data/courses.ts`.
2. **Teachers with `linkedin: null` or `github: null`** — do NOT render those icon buttons. Conditional rendering is already in place.
3. **Prof. Neeraj Singh** has `featured: true` — renders full-width at the top with a glowing purple badge. Detection uses `t.featured === true`, not role name.
4. **All images** are Unsplash URLs with `?w=400&fit=crop` — never use local image files.
5. **Color system** — always use the Design System tokens above, never random colors.
6. **Mobile-first** — every component must be responsive. Breakpoints: 375px, 768px, 1280px.
7. **Animations** — use Tailwind `transition`, `hover:`, `group` classes only. No external animation libraries.
8. **Icons** — use `lucide-react` only. Brand icons (Twitter, Github, Linkedin) do NOT exist in v1.x — see substitutes in Tech Stack section.
9. **Data files are `.ts`** — tsconfig has no `allowJs`. Do not create `.js` data files; they will cause `TS7016` build errors.

---

## 🚀 Common Dev Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production (type-check + vite build)
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel production
vercel --prod --yes
```

---

## 📝 How to Add a New Teacher

Open `src/data/teachers.ts` and add a new object to the array:

```ts
{
  id: 8,
  name: 'New Teacher Name',
  role: 'Their Role',
  expertise: ['Skill 1', 'Skill 2'],
  bio: 'Short bio here.',
  avatar: 'https://ui-avatars.com/api/?name=First+Last&background=HEX&color=fff&size=128&bold=true',
  featured: false,
  badge: 'Short Label',
  badgeColor: 'blue',   // blue | green | purple | pink | orange | cyan | violet
  linkedin: 'https://...',  // or null
  github: 'https://...',    // or null
}
```

No TSX changes needed — Teachers component auto-renders from the array.

---

## 🌐 Deployment

- **Platform:** Vercel (free)
- **GitHub:** `Nihal108-bi/vyombotics` (branch: `main`)
- **Auto-deploy:** Every `git push origin main` triggers a new Vercel build
- **Manual deploy:** `vercel --prod --yes` from project root

---

*Last updated: May 2025 | Maintained by Nihal Jaiswal*
