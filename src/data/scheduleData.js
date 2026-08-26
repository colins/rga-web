export const gymInfo = {
  name: "Resilience Gymnastics Academy",
  shortName: "RGA Gymnastics",
  formerly: "Gymnastics Plus",
  address: "6180 East Warren Ave, Denver, CO 80222",
  phone: "303-512-0799",
  email: "frontdesk@rgagymnast.com",
  currentWebsite: "https://rgagymnast.com",
  tagline: "Let's build resilience together.",
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
    "Enrollment is month-to-month — flexible & commitment-free!",
    "Reenrollment is continuous until written notification 14 days before month end.",
    "Makeup Policy: 1 makeup class per month per enrolled class."
  ]
};

export const values = [
  {
    id: "confidence-character-community",
    title: "Confidence, Character & Community",
    icon: "Sparkles",
    description: "At Resilience Gymnastics Academy, we believe that true strength comes from more than just muscles — it comes from confidence, character, and community.",
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "effort-perfection",
    title: "Effort Over Perfection",
    icon: "HeartPulse",
    description: "We celebrate hard work, determination, and trying your best. Every practice and conversation focuses on dedication over flawless results.",
    color: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "courage-fear",
    title: "Courage Over Fear",
    icon: "ShieldCheck",
    description: "Creating a safe, positive, and empowering environment where athletes are encouraged to challenge themselves every step, jump, and handstand of the way.",
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "growth-comparison",
    title: "Growth Over Comparison",
    icon: "Users",
    description: "Gymnastics should build resilience for life — teaching discipline, teamwork, and self-belief while focusing on each child's personal progress.",
    color: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
  }
];

export const classCategories = [
  { id: "all", name: "All Programs" },
  { id: "preschool", name: "Preschool (3-5 Yrs)" },
  { id: "girls", name: "Girls Rec (6+ Yrs)" },
  { id: "boys", name: "Boys Rec (6+ Yrs)" },
  { id: "ninjas", name: "GymNinjas (5+ Yrs)" }
];

export const classes = [
  {
    id: "preschool",
    name: "Preschool Gymnastics",
    category: "preschool",
    genderGroup: "Boys & Girls",
    ageRange: "3 - 5 Years",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Fun, structured introductory movement focused on balance, coordination, spatial awareness, and basic gymnastics fundamentals in a safe setting.",
    schedule: {
      Monday: ["4:30 - 5:30 pm"],
      Tuesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Wednesday: ["3:30 - 4:30 pm", "4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Thursday: ["4:30 - 5:30 pm"],
      Friday: [],
      Saturday: ["9:00 - 10:00 am", "10:00 - 11:00 am"]
    },
    highlights: ["Motor Skill Development", "Basic Trampoline & Foam Pit", "Obstacle Courses"],
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gymninjas",
    name: "GymNinjas",
    category: "ninjas",
    genderGroup: "Boys & Girls",
    ageRange: "5 & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Action-packed ninja training combining gymnastics tumbling, obstacle course navigation, parkour vaults, strength, and agility training.",
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Friday: [],
      Saturday: []
    },
    highlights: ["Obstacle Course Racing", "Vaulting & Wall Climbs", "Core Agility & Power"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "girls-beginner",
    name: "Beginner Girls Gymnastics",
    category: "girls",
    genderGroup: "Girls Classes",
    ageRange: "6 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Comprehensive foundational gymnastics covering floor routines, uneven bars, balance beam, and vaulting basics with proper technique.",
    schedule: {
      Monday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Tuesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Wednesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Thursday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Friday: [],
      Saturday: ["9:00 - 10:00 am", "10:00 - 11:00 am"]
    },
    highlights: ["Cartwheels & Handstands", "Beam Balance & Turns", "Bars Pullover & Casts"],
    image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "girls-intermediate",
    name: "Intermediate Girls Gymnastics",
    category: "girls",
    genderGroup: "Girls Classes",
    ageRange: "6 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Designed for gymnasts who have mastered foundational skills and are ready for back handspring progressions, higher beam skills, and bar routines.",
    schedule: {
      Monday: ["5:30 - 6:30 pm"],
      Tuesday: [],
      Wednesday: ["4:30 - 5:30 pm", "5:30 - 6:30 pm"],
      Thursday: ["5:30 - 6:30 pm"],
      Friday: [],
      Saturday: []
    },
    highlights: ["Roundoffs & Handsprings", "Beam Handstands & Jumps", "Bar Kip Progressions"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "girls-advanced",
    name: "Advanced Girls Gymnastics",
    category: "girls",
    genderGroup: "Girls Classes",
    ageRange: "6 Years & Up",
    durationMinutes: 90,
    priceMonthly: 148,
    description: "Intensive 90-minute training session for advanced recreational gymnasts refining flight elements, complex routine connections, and high performance.",
    schedule: {
      Monday: ["4:30 - 6:00 pm"],
      Tuesday: ["2:30 - 6:30 pm"],
      Wednesday: ["4:30 - 6:00 pm", "6:00 - 7:30 pm"],
      Thursday: [],
      Friday: [],
      Saturday: ["10:00 - 11:30 am"]
    },
    highlights: ["90-Minute Extended Practice", "Back Handspring Connections", "Advanced Bar & Vault Flight"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boys-beginner",
    name: "Beginner Boys Gymnastics",
    category: "boys",
    genderGroup: "Boys Classes",
    ageRange: "6 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Introduction to men's artistic gymnastics events including floor exercise, pommel horse, rings, vault, parallel bars, and high bar.",
    schedule: {
      Monday: [],
      Tuesday: ["4:30 - 5:30 pm"],
      Wednesday: [],
      Thursday: ["4:30 - 5:30 pm"],
      Friday: [],
      Saturday: ["9:00 - 10:00 am"]
    },
    highlights: ["Rings & Parallel Bars", "Upper Body Strength", "Vaulting & Tumbling"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boys-intermediate",
    name: "Intermediate Boys Gymnastics",
    category: "boys",
    genderGroup: "Boys Classes",
    ageRange: "6 Years & Up",
    durationMinutes: 60,
    priceMonthly: 108,
    description: "Developing athletic power, core control, ring holds, parallel bar swings, and advanced tumbling passes.",
    schedule: {
      Monday: [],
      Tuesday: ["4:30 - 5:30 pm"],
      Wednesday: [],
      Thursday: ["4:30 - 5:30 pm"],
      Friday: [],
      Saturday: ["9:00 - 10:00 am"]
    },
    highlights: ["Ring Muscle Progressions", "Parallel Bar Swings", "Floor Tumbling Combinations"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "boys-advanced",
    name: "Advanced Boys Gymnastics",
    category: "boys",
    genderGroup: "Boys Classes",
    ageRange: "6 Years & Up",
    durationMinutes: 90,
    priceMonthly: 148,
    description: "90-minute advanced boys training focusing on high-difficulty skills across all six men's apparatuses.",
    schedule: {
      Monday: [],
      Tuesday: ["5:30 - 7:00 pm"],
      Wednesday: [],
      Thursday: ["5:30 - 7:00 pm"],
      Friday: [],
      Saturday: ["10:00 - 11:30 am"]
    },
    highlights: ["90-Minute Practice", "High Bar Giants & Swings", "Advanced Ring & Vault Skills"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
  }
];

export const stockPhotos = [
  {
    url: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80",
    title: "Girls Beam Balance & Confidence",
    category: "Girls Rec"
  },
  {
    url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    title: "Preschool Movement & Fun",
    category: "Preschool"
  },
  {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    title: "GymNinjas Agility & Obstacle Course",
    category: "Ninjas"
  },
  {
    url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    title: "Boys Rings & Upper Body Strength",
    category: "Boys Rec"
  },
  {
    url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    title: "Floor Routine & Flight Progressions",
    category: "Tumbling"
  },
  {
    url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    title: "Resilience & Team Encouragement",
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
