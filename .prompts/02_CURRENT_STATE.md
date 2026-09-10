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
│   ├── TeamPage (`src/pages/TeamPage.jsx`) [Pink theme style, gymnast background, Mighty Minis Pre-Team & USAG]
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
- `teamData`: Pre-Team Mighty Minis, USAG competitive path, coaching standards, and evaluation requests.
- `stockPhotos`: Gallery grid photos with titles and categories.
- `themeOptions`: Color palette themes (Resilience Phoenix, Vibrant Athletic, Modern Royal).
