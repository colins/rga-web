export const gymInfo = {
  name: "Resilience Gymnastics Academy",
  shortName: "RGA Gymnastics",
  formerly: "Gymnastics Plus",
  address: "6180 East Warren Ave, Denver, CO 80222",
  phone: "303-512-0799",
  email: "frontdesk@rgagymnast.com",
  currentWebsite: "https://rgagymnast.com",
  portalUrl: "https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=497095",
  waiverUrl: "https://form.jotform.com/ResilienceGymnasticsAcademy/resilience-gymnastics-academy",
  instagramUrl: "https://www.instagram.com/resiliencegymnasticsacademy/",
  mapsUrl: "https://maps.google.com/?q=6180+East+Warren+Ave,+Denver,+CO+80222",
  tagline: "Let's build resilience together.",
  headline: "Building Strength, Confidence, and Character — One Skill at a Time.",
  belief: "True strength comes from more than just muscles — it comes from confidence, character, and community.",
  vision: "Creating a safe, positive, and empowering environment where athletes can thrive both in and out of the gym. Gymnastics should build resilience for life — teaching discipline, teamwork, and self-belief along the way.",
  motto: "We celebrate effort over perfection, courage over fear, and growth over comparison.",
  membershipFee: {
    child: 50,
    family: 75
  },
  tuition: {
    min60: 108,
    min90: 148,
    siblingDiscount: "10%"
  },
  updates: [
    "Enrollment is month-to-month — flexible & commitment-free (no sessions)!",
    "Continuous monthly re-enrollment until written notification 14 days before month end.",
    "10% sibling discount applied automatically to additional siblings.",
    "Annual membership fee: $50 per child or $75 per family."
  ]
};

export const values = [
  {
    id: "confidence-character-community",
    title: "Confidence, Character & Community",
    icon: "Sparkles",
    description: "At Resilience Gymnastics Academy, we believe that true strength comes from more than just muscles — it comes from confidence, character, and community.",
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1655842556563-2c28adb3fcc5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "effort-perfection",
    title: "Effort Over Perfection",
    icon: "HeartPulse",
    description: "We celebrate hard work, determination, and trying your best. Every practice and conversation focuses on dedication over flawless results.",
    color: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1655842556539-db2d2099ded1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "courage-fear",
    title: "Courage Over Fear",
    icon: "ShieldCheck",
    description: "Creating a safe, positive, and empowering environment where athletes are encouraged to challenge themselves every step, jump, and handstand of the way.",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "growth-comparison",
    title: "Growth Over Comparison",
    icon: "Users",
    description: "Gymnastics should build resilience for life — teaching discipline, teamwork, and self-belief while focusing on each child's personal progress.",
    color: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1655842556730-472e7315caa0?auto=format&fit=crop&w=800&q=80"
  }
];

export const classCategories = [
  { id: "all", name: "All Programs" },
  { id: "preschool", name: "Tots & Preschool" },
  { id: "girls", name: "Girls Rec & USAG" },
  { id: "boys", name: "Boys Rec" },
  { id: "ninjas", name: "GymNinjas" }
];

export const classes = [
  {
    id: "parent-tot",
    name: "Parent & Tot Gymnastics",
    category: "preschool",
    genderGroup: "Boys & Girls",
    ageRange: "18 Months - 3 Years",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Interactive parent-guided class introducing toddlers to basic motor skills, balance, foam pit exploration, and soft tumbling in a supportive and fun environment.",
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: ["4:30 - 5:30 pm"],
      Friday: [],
      Saturday: []
    },
    highlights: ["Parent-Guided Bonding", "Early Coordination & Balance", "Soft Foam Pit Exploration"],
    image: "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "preschool",
    name: "Preschool Gymnastics",
    category: "preschool",
    genderGroup: "Boys & Girls",
    ageRange: "3 - 5 Years",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Our Preschool Gymnastics program gives kids ages 3–5 a fun and encouraging place to move, explore, learn, and grow. Each class introduces gymnastics through playful movement, obstacle courses, stations, and basic skills on age-appropriate equipment.",
    schedule: {
      Monday: ["4:30 - 5:30 pm"],
      Tuesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Wednesday: ["3:30 - 4:30 pm", "4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Thursday: ["4:30 - 5:30 pm"],
      Friday: [],
      Saturday: ["9:00 - 10:00 am", "10:00 - 11:00 am"]
    },
    highlights: ["Motor Skill Development", "Basic Trampoline & Foam Pit", "Obstacle Courses & Stations"],
    image: "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gymninjas",
    name: "GymNinjas",
    category: "ninjas",
    genderGroup: "Boys & Girls",
    ageRange: "5 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "This high-energy class works with young athletes to build strength, coordination, agility, balance, flexibility, and body control. Athletes develop foundational movement skills navigating obstacles, learning safe jumping/landing, climbing, swinging, and vaulting.",
    schedule: {
      Monday: [],
      Tuesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Wednesday: [],
      Thursday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Friday: [],
      Saturday: []
    },
    highlights: ["Obstacle Course Racing", "Vaulting & Wall Climbs", "Safe Landing & Agility"],
    image: "https://images.unsplash.com/photo-1655842556432-ece48a4f2c1a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "girls-beginner",
    name: "Beginner Girls Gymnastics",
    category: "girls",
    genderGroup: "Girls (5 Years & Up)",
    ageRange: "5 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "A perfect class for kids new to gymnastics. We provide a positive introduction where they build a strong foundation on all four events—vault, bars, beam, and floor—while developing confidence, listening skills, and safe progressions.",
    schedule: {
      Monday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Tuesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Wednesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Thursday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Friday: [],
      Saturday: ["9:00 - 10:00 am", "10:00 - 11:00 am"]
    },
    highlights: ["Cartwheels & Handstands", "Beam Balance & Turns", "Bars Pullover & Vault Fundamentals"],
    image: "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "girls-intermediate",
    name: "Intermediate Girls Gymnastics",
    category: "girls",
    genderGroup: "Girls (5 Years & Up)",
    ageRange: "5 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Designed for gymnasts who have mastered the fundamentals and are ready to take their gymnastics to the next level with more advanced skills and combinations across all four events.",
    schedule: {
      Monday: ["5:30 - 6:30 pm"],
      Tuesday: [],
      Wednesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Thursday: ["5:30 - 6:30 pm"],
      Friday: [],
      Saturday: []
    },
    highlights: ["Roundoffs & Handspring Prep", "Beam Handstands & Jumps", "Bar Kip & Cast Progressions"],
    image: "https://images.unsplash.com/photo-1655842556539-db2d2099ded1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "girls-advanced",
    name: "Advanced Girls Gymnastics",
    category: "girls",
    genderGroup: "Girls (5 Years & Up)",
    ageRange: "5 Years & Up",
    durationMinutes: 90,
    priceMonthly: 148,
    description: "For more experienced gymnasts ready for higher-level gymnastics skills and combinations. Training focuses on advanced technique, strength, flexibility, body control, and routine consistency. Serves as a stepping stone towards exploring or joining our competitive team.",
    schedule: {
      Monday: ["4:30 - 6:00 pm"],
      Tuesday: ["4:30 - 6:00 pm"],
      Wednesday: ["4:30 - 6:00 pm", "6:00 - 7:30 pm"],
      Thursday: [],
      Friday: [],
      Saturday: ["10:00 - 11:30 am"]
    },
    highlights: ["90-Minute Training Session", "Back Handspring Connections", "Advanced Bar Flight & Vault"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boys-beginner",
    name: "Beginner Boys Gymnastics",
    category: "boys",
    genderGroup: "Boys (5 Years & Up)",
    ageRange: "5 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Positive introduction to men's artistic gymnastics events including floor exercise, pommel horse, rings, vault, parallel bars, and high bar.",
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: ["9:00 - 10:00 am"]
    },
    highlights: ["Rings & Parallel Bars", "Upper Body Power", "Vaulting & Floor Tumbling"],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boys-intermediate",
    name: "Intermediate Boys Gymnastics",
    category: "boys",
    genderGroup: "Boys (5 Years & Up)",
    ageRange: "5 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Developing strength, core control, ring holds, parallel bar swings, and advanced tumbling passes for boys ready for technical progress.",
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: ["9:00 - 10:00 am"]
    },
    highlights: ["Ring Muscle Progressions", "Parallel Bar Swings", "Floor Tumbling Combinations"],
    image: "https://images.unsplash.com/photo-1642932163549-3af44da6017f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boys-advanced",
    name: "Advanced Boys Gymnastics",
    category: "boys",
    genderGroup: "Boys (5 Years & Up)",
    ageRange: "5 Years & Up",
    durationMinutes: 90,
    priceMonthly: 148,
    description: "90-minute advanced boys training focusing on high-difficulty skills, apparatus stamina, and routine execution across all men's events.",
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: ["10:00 - 11:30 am"]
    },
    highlights: ["90-Minute Advanced Practice", "High Bar Giants & Swings", "Advanced Ring & Vault Skills"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  }
];

export const eventsData = {
  parentsNightOut: {
    title: "Parents' Night Out 🎉",
    tagline: "Need a few hours to yourself? Let us keep the kids entertained!",
    time: "5:00 PM – 9:00 PM",
    description: "Our Parents' Night Out is packed with active play, pizza, crafts, group games, and the possibility of a movie later in the evening for kids who need a break—giving your child a fun-filled evening with friends at Resilience Gymnastics Academy!",
    timeline: [
      { time: "5:00 – 6:30 PM", activity: "Open Gym & Supervised Play" },
      { time: "6:30 – 7:00 PM", activity: "Pizza Dinner (allergies/dietary preferences welcome to bring safe food)" },
      { time: "7:00 – 7:30 PM", activity: "Creative Crafts & Interactive Activities" },
      { time: "7:30 – 9:00 PM", activity: "Group Games & Kid-Friendly Movie Wind-Down" }
    ],
    pricing: [
      { label: "1 Child", price: "$50" },
      { label: "2 Children", price: "$90" },
      { label: "Each Additional Child", price: "$40" }
    ],
    whoCanAttend: [
      "Ages 4 to 12 (must be potty-trained)",
      "Open to both members and non-members!",
      "Parents are welcome to pick up their child earlier if convenient"
    ],
    whatToBring: [
      "Comfortable athletic clothing (no snaps, zippers, or buckles)",
      "Bare feet in the gymnastics area",
      "Refillable water bottle labeled with your child's name"
    ],
    upcomingDates: {
      fall2026: ["Sept 20, 2026", "Oct 18, 2026", "Nov 15, 2026", "Dec 13, 2026"],
      spring2027: ["Jan 17, 2027", "Feb 21, 2027", "Mar 20, 2027", "Apr 17, 2027", "May 15, 2027"]
    },
    registrationNote: "Spots are limited to ensure safe coach-to-child ratios. Register early through your Parent Portal to secure your spot!"
  },
  birthdayParties: {
    title: "Gymnastics Birthday Parties 🎂",
    tagline: "Celebrate your child's special day with high-energy fun at RGA!",
    price: "$250",
    duration: "1.5 Hours Private Party",
    highlights: [
      "100% Private Gym Access — your group has the entire gym facility to themselves!",
      "60 Minutes of structured games, obstacle courses, trampoline, foam pit & open play",
      "30 Minutes in the private party room for cake, presents, and celebration",
      "10 participating children included in base price",
      "Dedicated RGA party host/coaches leading all activities and assisting setup/cleanup"
    ],
    pricingDetails: [
      { item: "Base Package (1.5 Hours, up to 10 children)", cost: "$250" },
      { item: "Each Additional Child", cost: "$10 / child" },
      { item: "Additional Instructor (required for parties with >15 kids)", cost: "$20" }
    ],
    howItWorks: [
      "1. Contact the front desk at 303-512-0799 or frontdesk@rgagymnast.com to check availability and choose your date & time.",
      "2. Once booked, an RSVP & digital waiver link will be sent to you to easily share with all guests.",
      "3. All participants complete their digital waiver prior to party day so every child can start playing immediately!",
      "4. Bring your own cake, refreshments, and paper goods — our coaches handle the games, gym supervision, and cleanup assistance!"
    ]
  }
};

export const teamData = {
  title: "Resilience Competitive & Pre-Team Program",
  tagline: "Developing champions of character, courage, and excellence.",
  heroImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80",
  philosophy: "At Resilience Gymnastics Academy, competitive gymnastics is more than medals and scores. We cultivate lifelong resilience, self-belief, work ethic, and sportsmanship. We celebrate effort over perfection, courage over fear, and growth over comparison.",
  programs: [
    {
      id: "mighty-minis",
      name: "Mighty Minis (Pre-Team)",
      schedule: "90 Minutes — 2x per Week",
      ageRange: "Ages 4 - 7 (Placement by Coach Recommendation)",
      badge: "Foundational Pre-Team",
      description: "Mighty Minis is RGA's foundational pre-team program designed for gymnasts ready to increase their training beyond traditional recreational classes and begin preparing for competitive team.",
      highlights: [
        "Bridges the gap between recreational classes and competitive team expectations",
        "Develops strong technical foundations, flexibility, core conditioning, and work ethic",
        "Introduces skill progressions, form discipline, routines, and body positions",
        "Builds team habits: goal setting, perseverance, accountability, and teammate support"
      ]
    },
    {
      id: "usag-team",
      name: "USAG Developmental & Competitive Team",
      schedule: "Year-Round Training (Multiple Hours Weekly by Level)",
      ageRange: "Levels 2 – 10 & Xcel Divisions",
      badge: "USAG Competitive",
      description: "Our competitive team represents Resilience Gymnastics Academy in USAG sanctioned local, state, and regional competitions. Athletes train in a structured, positive environment guided by passionate, safety-certified coaches.",
      highlights: [
        "Compulsory (Levels 2-5) and Optional / Xcel Competitive Tracks",
        "Emphasis on sound biomechanics, individualized pacing, and injury prevention",
        "Comprehensive mental mindset training, goal tracking, and confidence building",
        "Supportive, family-like team culture where teammates lift each other up"
      ]
    }
  ],
  coachingCommitment: [
    "Safety-first progression standards certified through USA Gymnastics",
    "Positive reinforcement coaching methodology centered on long-term athletic development",
    "Balanced approach valuing academic success, family time, and well-rounded growth",
    "Clear, continuous communication with gymnast families throughout the competitive season"
  ],
  tryoutInfo: {
    heading: "Interested in Joining Our Team?",
    description: "Evaluations for Mighty Minis and USAG Competitive Teams are available year-round for gymnasts moving from other programs or progressing out of advanced recreational classes.",
    contactText: "Call our Front Desk at 303-512-0799 or email us at frontdesk@rgagymnast.com to schedule a private evaluation or discuss team placement."
  }
};

export const stockPhotos = [
  {
    url: "https://images.unsplash.com/photo-1576490252381-c97ccb950043?auto=format&fit=crop&w=800&q=80",
    title: "Youth Balance Beam & Focus",
    category: "Girls Rec & USAG"
  },
  {
    url: "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?auto=format&fit=crop&w=800&q=80",
    title: "Parent-Tot & Preschool Movement",
    category: "Tots & Preschool"
  },
  {
    url: "https://images.unsplash.com/photo-1655842556432-ece48a4f2c1a?auto=format&fit=crop&w=800&q=80",
    title: "GymNinjas Trampoline & Obstacle Vault",
    category: "Ninjas & Parkour"
  },
  {
    url: "https://images.unsplash.com/photo-1642932163549-3af44da6017f?auto=format&fit=crop&w=800&q=80",
    title: "Boys Gymnastics & Vaulting Progressions",
    category: "Boys Rec"
  },
  {
    url: "https://images.unsplash.com/photo-1655842556539-db2d2099ded1?auto=format&fit=crop&w=800&q=80",
    title: "Floor Tumbling & Group Practice",
    category: "Tumbling & Rec"
  },
  {
    url: "https://images.unsplash.com/photo-1655842556563-2c28adb3fcc5?auto=format&fit=crop&w=800&q=80",
    title: "Positive Coaching & Team Encouragement",
    category: "USAG & Team"
  },
  {
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    title: "Competitive USAG Beam Routine Technique",
    category: "USAG Competitive"
  },
  {
    url: "https://images.unsplash.com/photo-1655842556730-472e7315caa0?auto=format&fit=crop&w=800&q=80",
    title: "Youth Gymnasts Celebrating Progress",
    category: "Team Spirit"
  }
];

export const themeOptions = [
  {
    id: "resilience-pink",
    name: "Resilience Phoenix (Brand Original)",
    subtitle: "RGA Signature Magenta & Pink Palette with Phoenix Accents",
    bgClass: "bg-gradient-to-br from-pink-900 via-purple-950 to-slate-900",
    primaryColor: "#E6007E",
    accentColor: "#FF66C4",
    badgeBg: "bg-pink-100 text-pink-800 border-pink-300",
    buttonPrimary: "bg-pink-600 hover:bg-pink-700 text-white shadow-pink-500/25",
    buttonSecondary: "border-pink-500 text-pink-600 hover:bg-pink-50",
    cardBorder: "border-pink-200 hover:border-pink-400",
    navBg: "bg-white/95 backdrop-blur-md border-b border-pink-100",
    heroGradient: "from-pink-600/90 via-purple-700/80 to-slate-900/90"
  },
  {
    id: "athletic-vibrant",
    name: "Vibrant Athletic (Energetic)",
    subtitle: "High-Energy Teal & Coral Accent Theme",
    bgClass: "bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950",
    primaryColor: "#00A896",
    accentColor: "#FF6B6B",
    badgeBg: "bg-teal-100 text-teal-800 border-teal-300",
    buttonPrimary: "bg-teal-600 hover:bg-teal-700 text-white shadow-teal-500/25",
    buttonSecondary: "border-teal-500 text-teal-600 hover:bg-teal-50",
    cardBorder: "border-teal-200 hover:border-teal-400",
    navBg: "bg-white/95 backdrop-blur-md border-b border-teal-100",
    heroGradient: "from-teal-600/90 via-emerald-800/80 to-slate-900/90"
  },
  {
    id: "modern-navy",
    name: "Modern Royal (Premium Classic)",
    subtitle: "Sophisticated Royal Navy & Gold Theme",
    bgClass: "bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950",
    primaryColor: "#1E40AF",
    accentColor: "#F59E0B",
    badgeBg: "bg-blue-100 text-blue-800 border-blue-300",
    buttonPrimary: "bg-blue-700 hover:bg-blue-800 text-white shadow-blue-500/25",
    buttonSecondary: "border-blue-600 text-blue-700 hover:bg-blue-50",
    cardBorder: "border-blue-200 hover:border-blue-400",
    navBg: "bg-white/95 backdrop-blur-md border-b border-blue-100",
    heroGradient: "from-blue-700/90 via-indigo-800/80 to-slate-900/90"
  }
];
