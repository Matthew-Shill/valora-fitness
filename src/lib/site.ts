export const site = {
  name: "Valora",
  legalName: "Valora Fitness",
  method: "RISE",
  tagline: "Strength that fits your life.",
  description:
    "Strength training and nutrition coaching for busy people. Follow-along workouts, a simple fuel plan, and a coach in your corner — without hours in the gym.",
  founder: "Maya Vale",
  phone: "(555) 014-8820",
  phoneHref: "tel:5550148820",
  email: "hello@valora.fit",
  emailHref: "mailto:hello@valora.fit",
  instagram: "https://instagram.com/valorafitness",
  url: "https://valora-fitness.vercel.app",
  live: {
    days: "Tuesday, Thursday & Saturday",
    time: "6:30 AM ET",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/live", label: "Live Studio" },
  { href: "/shop", label: "Shop" },
  { href: "/start", label: "Free Workouts" },
  { href: "/contact", label: "Contact" },
] as const;

export const programs = [
  {
    slug: "ignite",
    eyebrow: "Starts any Monday",
    name: "21-Day Ignite",
    price: "$29",
    duration: "21 days",
    blurb:
      "Reset your routine. Follow-along strength sessions, a simple eats guide, and a plan you actually finish.",
    href: "/programs/ignite",
    cta: "Join for $29",
    image: "/images/squat.jpg",
    imagePosition: "center 20%",
    featured: true,
  },
  {
    slug: "lift-lab",
    eyebrow: "Next session in 2 weeks",
    name: "Lift Lab",
    price: "$129",
    duration: "8 weeks",
    blurb:
      "A progressive 8-week plan to build strength, lose fat, and finally see your body change — at home.",
    href: "/programs/lift-lab",
    cta: "Start Lift Lab",
    image: "/images/bands.jpg",
    imagePosition: "center 15%",
    featured: false,
  },
  {
    slug: "studio",
    eyebrow: "Ongoing membership",
    name: "Valora Studio",
    price: "From $89/mo",
    duration: "Month, quarter, or year",
    blurb:
      "Daily workouts, live coaching, mobility, and a community of people who are done starting over.",
    href: "/programs/studio",
    cta: "Join Studio",
    image: "/images/studio.jpg",
    imagePosition: "center 18%",
    featured: false,
  },
  {
    slug: "coaching",
    eyebrow: "1:1 coaching",
    name: "Private Coaching",
    price: "$1,800",
    duration: "12 weeks",
    blurb:
      "Custom nutrition and training to change how you eat, fuel, and feel — without another diet.",
    href: "/programs/coaching",
    cta: "Book a discovery call",
    image: "/images/fuel.jpg",
    imagePosition: "center 20%",
    featured: false,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Valora is the first plan that actually stuck. I have more energy at 6 p.m. than I used to have at noon, and my clothes finally fit the way I want.",
    name: "Priya",
    role: "Product designer & new mom",
  },
  {
    quote:
      "I started after my second baby feeling completely stuck. Eight weeks later I was stronger than before kids. The workouts are short, coached, and I can do them anywhere.",
    name: "Jordan",
    role: "Nurse, parent of 2",
  },
  {
    quote:
      "I tried every app and random YouTube plan. Nothing stuck. Now I open one workout and I am done. I have lost 40 pounds without living in the gym.",
    name: "Elena",
    role: "Teacher, parent of 2",
  },
  {
    quote:
      "I dropped two clothing sizes in 10 weeks and my joints feel better, not worse. I recommend Studio to anyone who is tired of starting over.",
    name: "Sam",
    role: "Valora Studio",
  },
  {
    quote:
      "My win is taking 30 minutes for me. The plan is simple enough that a busy week does not knock me off it.",
    name: "Chris",
    role: "21-Day Ignite",
  },
  {
    quote:
      "A couple of months in, I lost 14 pounds and stopped thinking about food all day. Maya gives practical next steps, not another meal-plan PDF.",
    name: "Harper",
    role: "Private coaching",
  },
] as const;

export const methodPillars = [
  {
    name: "Resistance",
    detail:
      "Progressive strength training that reshapes your body without extreme cardio or burnout.",
  },
  {
    name: "Intention",
    detail:
      "A simple daily rhythm: 40-minute lifts, protein at every meal, fiber you can actually hit, and a walk.",
  },
  {
    name: "Support",
    detail:
      "Habit-based coaching that works with family dinners, late meetings, and real life — not against them.",
  },
  {
    name: "Everyday recovery",
    detail:
      "Mobility, sleep, and walking so the work you do in 40 minutes actually shows up in how you feel.",
  },
] as const;

export const shop = {
  disclosure:
    "This is a portfolio concept. Product names are placeholders and links go to the contact form, not a live store.",
  essentials: [
    {
      name: "Adjustable dumbbells",
      spec: "10–70 lbs",
      blurb: "The one piece you actually need. Every Valora session is built around a pair of these.",
      href: "/contact?interest=gear",
      cta: "Ask about dumbbells",
      image: "/images/goblet.jpg",
      imagePosition: "center 20%",
    },
    {
      name: "Long loop bands",
      spec: "Light to extra-heavy",
      blurb: "Cable-machine work from a corner of your house. These show up in almost every Studio week.",
      href: "/contact?interest=gear",
      cta: "Ask about bands",
      image: "/images/bands.jpg",
      imagePosition: "center 15%",
    },
  ],
  gear: [
    {
      name: "Mini loop bands",
      spec: "Set of 5",
      blurb: "Glutes, activation, and travel days. Includes a carry pouch.",
      href: "/contact?interest=gear",
    },
    {
      name: "Fabric resistance bands",
      spec: "3 levels · non-slip",
      blurb: "Stay put when you move. Three levels of effort as you get stronger.",
      href: "/contact?interest=gear",
    },
    {
      name: "Slam balls",
      spec: "10–40 lbs",
      blurb: "The fun extra. Add power work when you want more from a home gym.",
      href: "/contact?interest=gear",
    },
    {
      name: "Adjustable bench",
      spec: "Full-body bench",
      blurb: "When you are ready to level up presses, rows, and supported work.",
      href: "/contact?interest=gear",
    },
    {
      name: "Door anchor",
      spec: "Multi-point strap",
      blurb: "Turn any door into a cable station. Packs into a small bag.",
      href: "/contact?interest=gear",
    },
    {
      name: "Wall mount",
      spec: "Stainless steel",
      blurb: "A more permanent home-gym setup for band work.",
      href: "/contact?interest=gear",
    },
  ],
  protein: [
    {
      name: "Studio Protein",
      spec: "Everyday powder",
      blurb: "A clean daily scoop when meals get loud.",
      href: "/contact?interest=fuel",
    },
    {
      name: "Grass-fed whey",
      spec: "Chocolate",
      blurb: "A simple whey if dairy sits well with you.",
      href: "/contact?interest=fuel",
    },
    {
      name: "Plant protein",
      spec: "Dairy-free",
      blurb: "The dairy-free option that still hits your protein target.",
      href: "/contact?interest=fuel",
    },
    {
      name: "Daily minerals",
      spec: "Electrolytes",
      blurb: "For hot training days and long walks.",
      href: "/contact?interest=fuel",
    },
  ],
} as const;

export const faqs = {
  general: [
    {
      q: "Is this for beginners?",
      a: "Yes. Every workout includes coaching, form cues, and modifications. Whether you are new to lifting or have been training for years, you will know exactly what to do.",
    },
    {
      q: "What equipment do I need?",
      a: "Dumbbells and resistance bands. That is it. No gym, no machines, no fancy setup. If you can spare a corner of a room, you can train.",
    },
    {
      q: "How long are the workouts?",
      a: "Most sessions are 30–40 minutes. Ignite workouts are 30 minutes or less. Open the app, press play, and get on with your day.",
    },
    {
      q: "What if I miss a day?",
      a: "Life happens. The plan is built for busy weeks. You pick back up, follow the next workout, and keep going. Consistency over perfection.",
    },
  ],
  studio: [
    {
      q: "When are live workouts?",
      a: "Tuesday, Thursday, and Saturday at 6:30 AM ET on Zoom. If you cannot make it live, the recording is waiting for you in the app.",
    },
    {
      q: "How is this different from a random workout library?",
      a: "Those are piles of disconnected sessions. Valora is a progressive plan that builds week to week, with a real coach and a community doing the same work.",
    },
    {
      q: "Can I cancel?",
      a: "Monthly memberships can be cancelled anytime. You will keep access through the billing period you already paid for.",
    },
  ],
  coaching: [
    {
      q: "Do I have to book a discovery call?",
      a: "Yes for private coaching. It is 12 weeks of 1:1 work, so we use the call to make sure it is the right fit for both of you.",
    },
    {
      q: "Is this only nutrition?",
      a: "Nutrition is the focus, but coaching also covers sleep, stress, hydration, and how your training supports your goals.",
    },
  ],
} as const;
