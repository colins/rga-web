# Current Site Layout Architecture & Component Tree

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3 / PostCSS
- **Icons**: Lucide React
- **Routing**: Clean Client-Side SPA Routing (supported by SiteGround `.htaccess` rewrite to `/index.html`)
- **Deployment**: SiteGround SFTP (`deploy.sh`)

## Component & Page Tree (`src/App.jsx`)
```
App
├── Navbar (`src/components/Navbar.jsx`)
│   ├── Brand & Logo (routes to /)
│   ├── Classes (routes to /classes)
│   ├── Events (routes to /events)
│   ├── Birthday Parties (routes to /birthday-parties)
│   ├── Waivers (direct link to JotForm)
│   ├── Team (routes to /team)
│   ├── Payment Portal (direct link to Jackrabbit)
│   ├── About (routes to /about)
│   ├── ThemeSwitcher (`src/components/ThemeSwitcher.jsx`)
│   └── Enroll Child Button (opens EnrollmentModal)
│
├── Page Views (`src/pages/`):
│   ├── HomePage (`src/pages/HomePage.jsx`) [Achieve Sports inspired uncluttered landing page]
│   ├── ClassesPage (`src/pages/ClassesPage.jsx`) [Fall 2026 schedule from latest_schedule.jpg, cards + table view]
│   ├── EventsPage (`src/pages/EventsPage.jsx`) [Parents' Night Out copied from rgagymnast.com/events]
│   ├── BirthdayPartiesPage (`src/pages/BirthdayPartiesPage.jsx`) [$250 private 90-min package from market research]
│   ├── TeamPage (`src/pages/TeamPage.jsx`) [Pink theme style, gymnast background, visual pathway flowchart, Mighty Minis Pre-Team, USAG Xcel (Bronze, Silver, Gold, Platinum), USAG DP (Compulsory L2-5 & Optional L6-10), comparison matrix, embedded evaluation form]
│   └── AboutPage (`src/pages/AboutPage.jsx`) [Mission, values, clickable frontdesk@rgagymnast.com email & map link]
│
├── Footer (`src/components/Footer.jsx`)
└── EnrollmentModal (`src/components/EnrollmentModal.jsx`)
```

## Primary Data Store (`src/data/scheduleData.js`)
- `gymInfo`: Name, address, phone, email (`frontdesk@rgagymnast.com`), current website URL, portal URL (`Jackrabbit`), waiver URL (`JotForm`), maps URL, belief, vision, motto, tagline.
- `values`: 4 core pillars with titles, descriptions, and youth gymnastics imagery.
- `classCategories`: Filter options for classes (All, Tots & Preschool, Girls Rec & USAG, Boys Rec, GymNinjas).
- `classes`: Full class catalog strictly synchronized with `media/latest_schedule.jpg` (Parent-Tot, Preschool, GymNinjas, Girls Beginner/Intermediate/Advanced, Boys Beginner/Intermediate/Advanced).
- `eventsData`: Parents' Night Out dates & schedule + $250 / 90-min Birthday Party packages.
- `teamData`:
  - `preTeam`: Mighty Minis (Ages 4-7, 90 min 2x/wk, foundational technical & conditioning bridge)
  - `xcelProgram`: 4 tiers (Bronze, Silver, Gold, Platinum) with weekly hours, key skills, and personalized routine focus
  - `dpProgram`: 2 divisions (Compulsory Levels 2-5, Optional Levels 6-10) with collegiate/NCAA trajectory
  - `comparisonMatrix`: Side-by-side feature comparison between Pre-Team, Xcel, and DP
  - `coachingCommitment`: USA Gymnastics safety and positive coaching standards
  - `evaluationProcess`: 3-step evaluation guide
- `stockPhotos`: Gallery grid photos with titles and categories.
- `themeOptions`: Color palette themes (Resilience Phoenix, Vibrant Athletic, Modern Royal).
