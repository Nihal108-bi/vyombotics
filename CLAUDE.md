# CLAUDE.md — Vyombotics Educational Website

> This file is Claude Code's memory for the Vyombotics project.
> Read this fully before making any changes to the codebase.

---

## 🚀 Project Overview

**Project Name:** Vyombotics  
**Type:** Educational Website (Tech & Robotics Learning Platform)  
**Owner:** Nihal Jaiswal  
**Status:** In Progress — downloaded from Bolt.new, continuing in VS Code  
**Goal:** A fully functional, modern educational website to teach students about AI, Robotics, Python, Web Dev, App Dev, 3D Design, IoT, and more.

---

## 🛠️ Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + lucide-react icons
- **Language:** JavaScript / JSX (or TypeScript if Bolt used .tsx)
- **Package Manager:** npm
- **Deployment Target:** Vercel

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
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Courses.jsx
│   │   ├── Teachers.jsx        ← Team section (data-driven)
│   │   ├── WhyVyombotics.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── teachers.js         ← All teacher data lives here
│   │   └── courses.js          ← All course data lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── CLAUDE.md                   ← You are here
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 👥 Team Members (Teachers Data)

> Stored in `src/data/teachers.js` — always edit data there, never hardcode in JSX.

```js
export const teachers = [
  {
    id: 1,
    name: "Prof. Neeraj Singh",
    role: "Academic Head",
    expertise: ["Robotics & AI", "Drone & Aerodynamics", "Ethics", "STEAM"],
    bio: "Visionary academic leader guiding Vyombotics' curriculum with deep expertise in Robotics, AI, Drone technology, Aerodynamics, and STEAM education.",
    avatar: "https://ui-avatars.com/api/?name=Neeraj+Singh&background=6d28d9&color=fff&size=128&bold=true",
    featured: true,
    badgeColor: "purple",
    linkedin: null,
    github: null,
  },
  {
    id: 2,
    name: "Nihal Jaiswal",
    role: "AI & GenAI Expert",
    expertise: ["AI", "ML", "Deep Learning", "Generative AI"],
    bio: "B.Tech IT student and AI/ML engineer specializing in LLMs, RAG pipelines, Agentic AI, and MLOps. National hackathon achiever with 80+ GitHub projects.",
    avatar: "https://ui-avatars.com/api/?name=Nihal+Jaiswal&background=2563eb&color=fff&size=128&bold=true",
    featured: false,
    badgeColor: "blue",
    linkedin: "https://www.linkedin.com/in/nihal-jaiswal-908b52257/",
    github: "https://github.com/Nihal108-bi",
  },
  {
    id: 3,
    name: "Srishti Soni",
    role: "IoT & Embedded Systems Expert",
    expertise: ["IoT", "Embedded Systems", "Hardware Programming"],
    bio: "Passionate hardware and embedded systems educator helping students bridge the gap between software and physical computing.",
    avatar: "https://ui-avatars.com/api/?name=Srishti+Soni&background=0891b2&color=fff&size=128&bold=true",
    featured: false,
    badgeColor: "cyan",
    linkedin: null,
    github: null,
  },
  {
    id: 4,
    name: "Rishabh Yadav",
    role: "Python & AI Expert",
    expertise: ["Python", "AI", "Machine Learning"],
    bio: "Dedicated Python and AI educator focused on building strong programming fundamentals and applying AI to real-world problem solving.",
    avatar: "https://ui-avatars.com/api/?name=Rishabh+Yadav&background=059669&color=fff&size=128&bold=true",
    featured: false,
    badgeColor: "green",
    linkedin: "https://linkedin.com/in/rishabh-yadav17",
    github: "https://github.com/RishabhYadav17",
  },
  {
    id: 5,
    name: "Aanchal Chaurasiya",
    role: "Web Development Expert",
    expertise: ["Frontend", "Backend", "Full Stack Web Dev"],
    bio: "Full stack web development mentor guiding students from HTML/CSS basics to deploying complete modern web applications.",
    avatar: "https://ui-avatars.com/api/?name=Aanchal+Chaurasiya&background=db2777&color=fff&size=128&bold=true",
    featured: false,
    badgeColor: "pink",
    linkedin: "https://linkedin.com/in/anchal-chaurasiya-693b53257",
    github: "https://github.com/Ancha2003",
  },
  {
    id: 6,
    name: "Neeraj Kumar",
    role: "Robotics & Automation Expert",
    expertise: ["Robotics", "Automation", "Control Systems"],
    bio: "Robotics and automation specialist helping students design, build, and program intelligent robotic systems for real-world applications.",
    avatar: "https://ui-avatars.com/api/?name=Neeraj+Kumar&background=d97706&color=fff&size=128&bold=true",
    featured: false,
    badgeColor: "orange",
    linkedin: null,
    github: null,
  },
  {
    id: 7,
    name: "Anmol Verma",
    role: "3D Design Expert",
    expertise: ["3D Modelling", "CAD", "Product Design", "Rendering"],
    bio: "Creative 3D design educator teaching students to bring ideas to life using industry-standard tools for modelling and design.",
    avatar: "https://ui-avatars.com/api/?name=Anmol+Verma&background=7c3aed&color=fff&size=128&bold=true",
    featured: false,
    badgeColor: "violet",
    linkedin: null,
    github: null,
  },
]
```

---

## 📚 Courses Offered

> Stored in `src/data/courses.js`

| Course | Unsplash Photo ID | Level |
|---|---|---|
| Robotics Fundamentals | `photo-1485827404703-89b55fcc595e` | Beginner |
| Artificial Intelligence | `photo-1677442135703-1787eea5ce01` | Intermediate |
| Python Programming | `photo-1526379095098-d400fd0bf935` | Beginner |
| Web Development | `photo-1547658719-da2b51169166` | Beginner |
| App Development | `photo-1512941937669-90a1b58e7e9c` | Intermediate |
| 3D Designing | `photo-1633356122544-f134324a6cee` | Beginner |
| Machine Learning | `photo-1555949963-ff9fe0c870eb` | Advanced |
| Electronics & IoT | `photo-1518770660439-4636190af475` | Intermediate |

All images: `https://images.unsplash.com/photo-{ID}?w=400&fit=crop`

---

## ✅ Website Sections Checklist

- [ ] Navbar (sticky, blur, mobile hamburger menu)
- [ ] Hero (headline, CTA buttons, background image)
- [ ] Stats Bar (Students, Courses, Teachers, Hands-On)
- [ ] Courses Section (8 course cards, grid layout)
- [ ] Teachers Section (7 members, Prof. Singh featured)
- [ ] Why Vyombotics (4 feature cards with icons)
- [ ] Testimonials (3 placeholder student reviews)
- [ ] Contact / Join Waitlist CTA
- [ ] Footer (logo, links, copyright)

---

## 🔧 Key Rules for Claude Code

1. **Never hardcode teacher or course data in JSX.** Always use the data files in `src/data/`.
2. **Teachers with `linkedin: null` or `github: null`** — do NOT render those icon buttons. Use conditional rendering.
3. **Prof. Neeraj Singh** has `featured: true` — render his card separately at the top, full-width, with a glowing purple "Academic Head" badge.
4. **All images** are from Unsplash URLs — never use local image files unless explicitly added.
5. **Color system** — always use the Design System tokens above, never random colors.
6. **Mobile-first** — every component must be responsive. Test at 375px, 768px, and 1280px.
7. **Animations** — use Tailwind `transition`, `hover:`, `group` classes. No heavy animation libraries unless already in package.json.
8. **Icons** — use `lucide-react` only. Already installed.

---

## 🚀 Common Dev Commands

```bash
# Install dependencies after downloading from Bolt
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 How to Add a New Teacher Later

Open `src/data/teachers.js` and add a new object to the array:

```js
{
  id: 8,
  name: "New Teacher Name",
  role: "Their Role",
  expertise: ["Skill 1", "Skill 2"],
  bio: "Short bio here.",
  avatar: "https://ui-avatars.com/api/?name=First+Last&background=HEX&color=fff&size=128&bold=true",
  featured: false,
  badgeColor: "blue",   // blue | green | purple | pink | orange | cyan | violet
  linkedin: "https://...",  // or null
  github: "https://...",    // or null
}
```

No JSX changes needed — Teachers component auto-renders from the array.

---

## 🌐 Deployment

- **Platform:** Vercel (free)
- **Steps:**
  1. Push code to GitHub → `Nihal108-bi/vyombotics`
  2. Go to vercel.com → Import repo
  3. Framework: Vite → Deploy
  4. Auto-deploys on every `git push`

---

## 📌 Current TODO (Pick Up From Here)

> Bolt ran out of tokens. Continue from these pending tasks:

1. Run `npm install` and confirm dev server starts cleanly
2. Audit which components Bolt completed vs left incomplete
3. Create `src/data/teachers.js` with the full team array above
4. Create `src/data/courses.js` with course data
5. Build / fix `Teachers.jsx` to render from data file
6. Ensure mobile responsiveness on all sections
7. Add smooth scroll in `index.css`: `html { scroll-behavior: smooth; }`
8. Verify all Unsplash image URLs load correctly
9. Final build test → `npm run build`
10. Deploy to Vercel

---

*Last updated: May 2025 | Maintained by Nihal Jaiswal*
