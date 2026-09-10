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
    image: "/images/value-confidence.webp"
  },
  {
    id: "effort-perfection",
    title: "Effort Over Perfection",
    icon: "HeartPulse",
    description: "We celebrate hard work, determination, and trying your best. Every practice and conversation focuses on dedication over flawless results.",
    color: "from-purple-500 to-indigo-500",
    image: "/images/value-effort.webp"
  },
  {
    id: "courage-fear",
    title: "Courage Over Fear",
    icon: "ShieldCheck",
    description: "Creating a safe, positive, and empowering environment where athletes are encouraged to challenge themselves every step, jump, and handstand of the way.",
    color: "from-amber-500 to-orange-500",
    image: "/images/value-courage.webp"
  },
  {
    id: "growth-comparison",
    title: "Growth Over Comparison",
    icon: "Users",
    description: "Gymnastics should build resilience for life — teaching discipline, teamwork, and self-belief while focusing on each child's personal progress.",
    color: "from-teal-500 to-emerald-500",
    image: "/images/value-growth.webp"
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
    image: "/images/class-parent-tot.webp"
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
    image: "/images/class-preschool.webp"
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
    image: "/images/class-gymninjas.webp"
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
    image: "/images/class-girls-rec.webp"
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
    image: "/images/class-girls-intermediate.webp"
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
    image: "/images/class-girls-advanced.webp"
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
    image: "/images/class-boys-beginner.webp"
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
    image: "/images/class-boys-intermediate.webp"
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
    image: "/images/class-boys-advanced.webp"
  }
];

export const eventsData = {
  parentsNightOut: {
    title: "Parents' Night Out 🎉",
    tagline: "FUN FOR THEM. TIME FOR YOU!",
    nextEventDate: "Saturday, September 19, 2026",
    time: "5:00 PM – 9:00 PM",
    flyerImage: "/images/pno-sept19.png",
    image: "/images/event-pno.webp",
    description: "Need a few hours to yourself? Let us keep the kids entertained while you enjoy a night out! Our Parents' Night Out is packed with active play, pizza, crafts, group games, and the possibility of a movie later in the evening for those who need a less active environment—giving your child a fun-filled evening with friends at Resilience Gymnastics Academy!",
    timeline: [
      { time: "5:00 – 6:30 PM", activity: "Open Gym & Supervised Play" },
      { time: "6:30 – 7:00 PM", activity: "Pizza Dinner (allergies/dietary preferences welcome to bring safe food)" },
      { time: "7:00 – 7:30 PM", activity: "Creative Crafts & Interactive Activities" },
      { time: "7:30 – 9:00 PM", activity: "Group Games & Movie Wind-Down Option" }
    ],
    pricing: [
      { label: "1 Child", price: "$50" },
      { label: "2 Children", price: "$90" },
      { label: "Each Additional Child", price: "$40" }
    ],
    whoCanAttend: [
      "Ages 4 to 12 (must be fully potty-trained)",
      "Open to both members and non-members!",
      "Parents are welcome to pick up their child earlier if convenient"
    ],
    whatToBring: [
      "Refillable water bottle labeled with child's name",
      "Comfortable athletic clothing (bare feet on gym floors, no snaps/zippers)",
      "Snack or safe food alternative if allergic to or preferring not to eat pizza"
    ],
    upcomingDates: {
      fall2026: ["Sept 19, 2026 (Next Event!)", "Oct 17, 2026", "Nov 21, 2026", "Dec 19, 2026"],
      spring2027: ["Jan 16, 2027", "Feb 20, 2027", "Mar 20, 2027", "Apr 17, 2027", "May 15, 2027"]
    },
    registrationInstructions: "In your Jackrabbit Parent Portal dashboard: look on the right side under 'Looking for Activities' and select the green 'Register' button on the PNO event.",
    registrationNote: "Spots are limited to ensure safe coach-to-child ratios. Register early through your Parent Portal to secure your child's spot!"
  },
  birthdayParties: {
    title: "Gymnastics Birthday Parties 🎂",
    tagline: "Celebrate your child's special day with active gymnastics fun at RGA!",
    price: "$300",
    image: "/images/event-birthday.webp",
    flyerImage: "/images/birthday-flyer.png",
    duration: "90 Minutes (1.5 Hours)",
    availableTimes: [
      { day: "Saturdays", time: "3:00 PM – 4:30 PM" },
      { day: "Sundays", time: "10:30 AM – 12:00 PM" },
      { day: "Sundays", time: "1:00 PM – 2:30 PM" }
    ],
    timeline: [
      { time: "First 60 Minutes", activity: "Supervised time in the gym on equipment, obstacle courses, and games (age-appropriate for birthday child)" },
      { time: "Remaining 30 Minutes", activity: "Time spent in the private party room for cake, refreshments, and celebration" }
    ],
    highlights: [
      "90 Minutes of private party celebration (60 min gym fun + 30 min party room)",
      "Structured games, obstacle courses, and gymnastics equipment tailored to birthday child's age",
      "Dedicated RGA party coaches supervising and leading all gym activities",
      "Observation deck and party room seating for parents and guests",
      "Setup assistance and post-party cleanup support"
    ],
    packages: [
      {
        name: "Package 1",
        guests: "1 – 10 Children",
        cost: "$300",
        deposit: "$100 deposit due at booking",
        description: "Includes 90 minutes of total party time with 60 minutes of supervised gymnastics gym activities and 30 minutes in the private party room."
      },
      {
        name: "Package 2",
        guests: "11 – 20 Children",
        cost: "$400",
        deposit: "$100 non-refundable deposit due at booking",
        description: "Great for larger celebrations. Includes 90 minutes of total party time with 60 minutes of supervised gymnastics gym activities and 30 minutes in the private party room."
      }
    ],
    pricingDetails: [
      { item: "Package 1 (1–10 Children)", cost: "$300", deposit: "$100 deposit due at booking" },
      { item: "Package 2 (11–20 Children)", cost: "$400", deposit: "$100 non-refundable deposit due at booking" },
      { item: "Staff Gratuity", cost: "Accepted", deposit: "Tips are appreciated but not included in package total" }
    ],
    policies: [
      {
        title: "Parent & Floor Policy",
        desc: "No parents are allowed on equipment or the gym floor except for 'Birthday Parents' or parents of toddlers specifically invited in."
      },
      {
        title: "Observation Deck",
        desc: "Parents not on the gym floor are warmly welcome to watch from our elevated Observation Deck or relax in the party room."
      },
      {
        title: "Signed Waivers Required",
        desc: "All parents entering the gym must have a signed waiver. Every participating child must have a digital waiver signed by a parent or legal guardian prior to participation."
      },
      {
        title: "Safety Restrictions",
        desc: "Children in casts, boots, or orthopedic braces are not permitted to participate in the gymnastics portion of the party."
      },
      {
        title: "Alcohol Policy",
        desc: "Absolutely no alcohol is allowed anywhere on the premises."
      }
    ],
    howItWorks: [
      "1. Contact the front desk at 303-512-0799 or frontdesk@rgagymnast.com to check weekend availability and choose your date & time.",
      "2. Select Package 1 (1–10 kids, $300) or Package 2 (11–20 kids, $400) and place your $100 deposit to secure your spot.",
      "3. Share our digital waiver link with all guests so every child has a signed waiver prior to party day.",
      "4. Bring your own cake, food, and paper products — our coaches lead 60 minutes of gym games and 30 minutes in the party room!"
    ]
  }
};

export const teamData = {
  title: "Resilience Competitive & Pre-Team Program",
  tagline: "Developing champions of character, courage, and excellence.",
  heroImage: "/images/gymnast-beam.webp",
  philosophy: "At Resilience Gymnastics Academy, competitive gymnastics is more than medals and scores. We cultivate lifelong resilience, self-belief, work ethic, and sportsmanship. We celebrate effort over perfection, courage over fear, and growth over comparison.",
  
  preTeam: {
    id: "mighty-minis",
    name: "Mighty Minis Pre-Team",
    badge: "Foundational Pre-Team Program",
    image: "/images/team-mighty-minis.webp",
    ageRange: "Ages 4 - 7 (By Coach Recommendation or Evaluation)",
    schedule: "90 Minutes — 2x per Week (3 Hours Total)",
    tagline: "Structured Pre-Team Development for Young Athletes",
    description: "Mighty Minis is RGA's foundational pre-team program designed for young gymnasts (ages 4–7) who show natural enthusiasm, physical coordination, and readiness for a structured training environment focused on fundamental technique, strength, and body positions.",
    highlights: [
      "Accelerated foundational skill development beyond recreational classes",
      "Develops strong technical foundations, flexibility, core conditioning, and work ethic",
      "Introduces skill progressions, form discipline, routines, and body positions",
      "Builds team habits: goal setting, perseverance, accountability, and teammate support",
      "Individualized coach evaluations and progressive skill benchmarks"
    ]
  },

  xcelProgram: {
    id: "xcel-program",
    name: "USA Gymnastics Xcel Program",
    badge: "Flexible Competitive Track",
    image: "/images/team-xcel.webp",
    subtitle: "Competitive Excellence with Flexibility for Multi-Sport & Well-Rounded Athletes",
    description: "Our USAG Xcel Program provides an authentic competitive gymnastics experience designed for gymnasts who desire high achievement without the overwhelming time commitment of traditional DP. Athletes compete in sanctioned invitationals across Colorado with customized routines tailored to their strengths and personalities.",
    weeklyHours: "6 – 12 Hours / Week",
    levelsOffered: "Bronze, Silver, Gold, Platinum",
    strengths: [
      "Customized routines tailored to each gymnast's personal strengths and artistic style",
      "Flexible training schedules ideal for multi-sport athletes or rigorous academic schedules",
      "Competes in local, state, and regional USA Gymnastics sanctioned meets",
      "Safe, progressive skill development with lower injury risk and positive team culture"
    ],
    tiers: [
      {
        level: "Bronze",
        badge: "Entry Competitive",
        hours: "4 – 6 Hours / Week",
        focus: "Foundational Routines & Presentation",
        description: "The entry point to competitive gymnastics. Athletes learn choreographed routines on all four events with an emphasis on presentation, posture, and confidence under friendly competitive conditions.",
        keySkills: ["Handstand holds & cartwheels", "Bar pullover & cast progressions", "Beam mounts, arabesques & dismounts", "Basic floor tumbling & leap connections"]
      },
      {
        level: "Silver",
        badge: "Developing Competitive",
        hours: "6 – 8 Hours / Week",
        focus: "Skill Progression & Precision",
        description: "Silver gymnasts advance their skills with increased complexity and precision. Routines become more dynamic, incorporating flight elements, turns, and higher-level bar releases.",
        keySkills: ["Round-off back handspring drills", "Bar back hip circles & squat-ons", "Beam handstands & leap combinations", "Floor tumbling passes & artistic choreography"]
      },
      {
        level: "Gold",
        badge: "Intermediate Competitive",
        hours: "8 – 10 Hours / Week",
        focus: "Individualized Choreography & Flight",
        description: "At the Gold level, routines are uniquely tailored to showcase the gymnast's style. Athletes train advanced flight elements and prepare for high school gymnastics or upper-level club competition.",
        keySkills: ["Back handspring connections on floor", "Kips & clear hips on uneven bars", "Beam flight elements & 1/1 pirouettes", "Handspring vaulting & high-level apparatus flight"]
      },
      {
        level: "Platinum",
        badge: "Advanced Competitive",
        hours: "10 – 12 Hours / Week",
        focus: "Advanced Difficulty & Artistry",
        description: "Our highest Xcel division. Platinum athletes perform sophisticated choreography, twisting tumbling passes, and complex bar releases, demonstrating collegiate-level work ethic and maturity.",
        keySkills: ["Salto & twisting passes on floor", "Cast to handstands & flyaway dismounts", "Beam back walkovers/handsprings & leaps", "Tsukahara/Yurchenko entry vaulting drills"]
      }
    ]
  },

  dpProgram: {
    id: "dp-program",
    name: "USA Gymnastics Developmental Program (DP)",
    badge: "Traditional USAG Track",
    image: "/images/team-dp.webp",
    subtitle: "A Sequential Level Progression from Compulsory Mastery to Advanced Optional & Collegiate Opportunities",
    description: "Formerly known as the Junior Olympic (J.O.) program, the Developmental Program is USA Gymnastics' premier competitive program. Within DP, athletes progress step-by-step: first mastering standardized Compulsory routines (Levels 2–5) to build an unbreakable foundation of technique, before graduating to personalized Optional routines (Levels 6–10) and collegiate (NCAA) competition.",
    weeklyHours: "9 – 20+ Hours / Week",
    levelsOffered: "Compulsory (Levels 2–5) & Optional (Levels 6–10)",
    progressionNote: "Within the DP program, gymnasts start in Compulsory to master foundational technique on each event. Once compulsory routines and mobility scores are achieved, athletes advance to the Optional program.",
    strengths: [
      "Structured level-by-level progression (Compulsory Levels 2–5 into Optional Levels 6–10)",
      "Standardized national curriculum building flawless technique, body alignment, and discipline",
      "Graduation into custom choreography, individual artistry, and high-difficulty skills in Optional",
      "Direct athletic trajectory preparing dedicated athletes for state, regional, national, and NCAA collegiate gymnastics"
    ],
    tiers: [
      {
        stage: "Stage 1: Foundational Mastery",
        level: "Compulsory Program",
        subheading: "Levels 2 – 5",
        badge: "Step 1: Compulsory Progression",
        hours: "9 – 14 Hours / Week",
        focus: "Standardized National Curriculum & Strict Fundamentals",
        description: "The vital first stage of the Developmental Program. Every gymnast across the nation competes the exact same routines created by USA Gymnastics. This ensures athletes master fundamental techniques on all four events—building superior strength, flexibility, coordination, and mental discipline before advancing.",
        advancementCriteria: "Advancement to Optionals occurs once gymnasts consistently achieve USA Gymnastics mobility scores and demonstrate the technical maturity required for personalized routines.",
        keySkills: [
          "Levels 2 & 3: Master fundamental shapes, precise body alignment, handstand holds, and glide kip drills",
          "Level 4: Strict compulsory routine mastery including back handsprings on floor and kip-cast-squat on uneven bars",
          "Level 5: Advanced compulsory routines with long-hang kips, clear hip circles, beam cartwheels, and flyaways"
        ]
      },
      {
        stage: "Stage 2: Advanced Artistry & Difficulty",
        level: "Optional Program",
        subheading: "Levels 6 – 10",
        badge: "Step 2: Optional Progression",
        hours: "15 – 20+ Hours / Week",
        focus: "Personalized Routines, Maximum Difficulty & NCAA Trajectory",
        description: "Tailored specifically for gymnasts who have mastered the basics of compulsory routines. This upper-level program empowers athletes to explore their creativity and individuality, choreographing personalized routines to showcase each athlete's unique talents while pushing difficulty boundaries and pursuing collegiate recruitment.",
        advancementCriteria: "Prepares athletes for State, Regional, and National Championships, Westerns/Nationals, and NCAA Division I, II, or III collegiate team recruitment.",
        keySkills: [
          "Levels 6 & 7: Transition to custom routines, cast to handstands, beam flight series, and flipping/twisting vaults",
          "Levels 8 & 9: High-difficulty connections, giants, pirouettes, double saltos, and collegiate recruitment portfolios",
          "Level 10: Maximum difficulty, national championship podiums, and NCAA Division I/II/III scholarship preparation"
        ]
      }
    ]
  },

  comparisonMatrix: [
    {
      feature: "Primary Athletic Focus",
      mightyMinis: "Foundational strength, posture & readiness",
      xcel: "Personalized routines, multi-sport flexibility",
      dp: "Strict technical perfection & collegiate path"
    },
    {
      feature: "Weekly Training Commitment",
      mightyMinis: "3 Hours (Two 90-min practices)",
      xcel: "6 – 12 Hours / Week",
      dp: "9 – 20+ Hours / Week"
    },
    {
      feature: "Routine Choreography",
      mightyMinis: "Skill progressions & basic sequences",
      xcel: "100% Custom routines from Bronze to Platinum",
      dp: "Standardized (L2-5) / Custom Optional (L6-10)"
    },
    {
      feature: "Competition Travel Scope",
      mightyMinis: "In-gym exhibitions & showcases",
      xcel: "Local Colorado meets, State, Regionals",
      dp: "State, Regional, Western & National meets"
    },
    {
      feature: "Schedule Flexibility",
      mightyMinis: "High (2 set days)",
      xcel: "Moderate-High (supports multi-sport athletes)",
      dp: "Low (demands primary athletic dedication)"
    },
    {
      feature: "Ideal For",
      mightyMinis: "Young athletes showing advanced interest",
      xcel: "Athletes wanting competition + life balance",
      dp: "Athletes aiming for highest competitive ranks / NCAA"
    }
  ],

  coachingCommitment: [
    "Safety-first progression standards certified through USA Gymnastics",
    "Positive reinforcement coaching methodology centered on long-term athletic development",
    "Balanced approach valuing academic success, family time, and well-rounded growth",
    "Clear, continuous communication with gymnast families throughout the competitive season"
  ],

  evaluationProcess: {
    heading: "How Team Evaluations Work",
    description: "Every athlete's competitive journey begins with an individualized coach evaluation to ensure appropriate placement based on skill readiness, mental focus, and developmental goals.",
    steps: [
      {
        step: 1,
        title: "Submit Evaluation Request",
        desc: "Fill out the team evaluation request form below or contact our front desk team."
      },
      {
        step: 2,
        title: "30-Minute Skills Assessment",
        desc: "A senior coach evaluates flexibility, core strength, basic apparatus skills, and coachability."
      },
      {
        step: 3,
        title: "Personalized Family Consultation",
        desc: "We discuss recommended placement (Mighty Minis, Xcel, or DP), training schedule, and answer questions."
      }
    ]
  }
};

export const stockPhotos = [
  {
    url: "/images/class-girls-rec.webp",
    title: "Youth Balance Beam & Focus",
    category: "Girls Rec & USAG"
  },
  {
    url: "/images/class-preschool.webp",
    title: "Parent-Tot & Preschool Movement",
    category: "Tots & Preschool"
  },
  {
    url: "/images/class-gymninjas.webp",
    title: "GymNinjas Trampoline & Obstacle Vault",
    category: "Ninjas & Parkour"
  },
  {
    url: "/images/class-boys-intermediate.webp",
    title: "Boys Gymnastics & Vaulting Progressions",
    category: "Boys Rec"
  },
  {
    url: "/images/class-girls-intermediate.webp",
    title: "Floor Tumbling & Group Practice",
    category: "Tumbling & Rec"
  },
  {
    url: "/images/value-confidence.webp",
    title: "Positive Coaching & Team Encouragement",
    category: "USAG & Team"
  },
  {
    url: "/images/class-girls-advanced.webp",
    title: "Competitive USAG Beam Routine Technique",
    category: "USAG Competitive"
  },
  {
    url: "/images/value-growth.webp",
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
