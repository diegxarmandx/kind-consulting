export const contact = {
  email: "KINdVibezOnly@gmail.com",
  emailHref: "mailto:KINdVibezOnly@gmail.com",
  phone: "323.515.9839",
  phoneHref: "tel:13235159839",
  location: "Los Angeles, CA",
  consultHref: "/book-consult"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Consulting", href: "/consulting" },
  { label: "Private Childcare", href: "/private-childcare" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" }
];

export const images = {
  logo: "/images/kind-logo.avif",
  hero: "/images/hero-img.avif",
  ceo: "/images/ceo-img.avif",
  consulting: "/images/child-care-consulting.avif",
  privateChildcare: "/images/private-childcare-img.avif",
  sleep: "/images/pedriatic-sleep-coaching.avif",
  rates: "/images/rates-img.avif",
  testimonialHero: "/images/testimonials/testimonial-hero.jpg",
  testimonials: [
    "/images/testimonials/testimonial1.png",
    "/images/testimonials/testimonial2.png",
    "/images/testimonials/testtimonials3.png",
    "/images/testimonials/testimonial4.png",
    "/images/testimonials/testimonial5.png",
    "/images/testimonials/testimonial6.png"
  ],
  blog: [
    "/images/blog/img1.avif",
    "/images/blog/img2.avif",
    "/images/blog/img3.avif",
    "/images/blog/img4.avif"
  ],
  credentials: [
    "/images/credentials/cred1.avif",
    "/images/credentials/cred2.avif",
    "/images/credentials/cred3.avif"
  ]
};

export const home = {
  heroTitle: "Calm, Confident Support for Growing Families",
  heroKicker: "Childcare clarity. Home harmony.",
  heroText:
    "Parents are overwhelmed by childcare decisions, nursery chaos, routines, sleep training, and everyday family life. KINd Consulting helps bring clarity, empowerment, and peace to family life.",
  trustBadges: ["18 Years Experience", "CPR & First Aid Certified", "CA Trustline Certified"],
  painTitle: "Feeling overwhelmed by all of the parenting decisions you have to make?",
  painPoints: [
    "Nanny or daycare?",
    "Preschool waitlists?",
    "Nursery not ready?",
    "Sleep routines feeling impossible?"
  ],
  whyKind: [
    "18 years of childcare experience",
    "Private childcare and home management background",
    "Calm, practical family support",
    "Personalized guidance",
    "Organization systems that work for real family life"
  ]
};

export type ImageAspect = "landscape" | "portrait" | "square";

export const services: Array<{
  title: string;
  description: string;
  href: string;
  image: string;
  imageAspect: ImageAspect;
}> = [
  {
    title: "Childcare Consulting",
    description:
      "Guidance for nanny, daycare, preschool, and care planning decisions so families can move forward with clarity.",
    href: "/consulting",
    image: images.consulting,
    imageAspect: "square"
  },
  {
    title: "Private Childcare",
    description:
      "Short-term or long-term childcare from a seasoned nanny with a warm, reliable, high-quality approach.",
    href: "/private-childcare",
    image: images.privateChildcare,
    imageAspect: "portrait"
  },
  {
    title: "Nursery Organization",
    description:
      "Calm, functional nursery and child-centered systems for clothes, toys, essentials, and daily routines.",
    href: "/consulting",
    image: images.ceo,
    imageAspect: "square"
  },
  {
    title: "Home Management",
    description:
      "Thoughtful family support for calendars, errands, routines, playrooms, wardrobes, and household flow.",
    href: "/private-childcare",
    image: images.rates,
    imageAspect: "portrait"
  },
  {
    title: "Pediatric Sleep Consulting",
    description:
      "Guided sleep solutions designed to make routines feel lighter and family evenings more peaceful.",
    href: contact.consultHref,
    image: images.sleep,
    imageAspect: "square"
  }
];

export const consultingSections = [
  {
    title: "Free Initial Consultation",
    eyebrow: "Complimentary first step",
    description:
      "A no-obligation consultation for families needing help with childcare decisions or organizing child-centered spaces.",
    bullets: [
      "Discuss family needs",
      "Understand preferences",
      "Identify current challenges",
      "Offer expert advice and direction",
      "Help parents make informed decisions with more clarity and confidence"
    ]
  },
  {
    title: "2-Hour In-Depth Consultation + Customized Childcare Plan",
    eyebrow: "A clear childcare roadmap",
    description:
      "For families unsure where to begin with nanny, daycare, and preschool options.",
    bullets: [
      "Personalized care recommendations",
      "Provider options",
      "Nanny, daycare, and preschool guidance",
      "A clear childcare roadmap tailored to the family"
    ]
  },
  {
    title: "Nursery Organization",
    eyebrow: "Calm, functional spaces",
    description:
      "Designed for families preparing for a first baby, refreshing after a baby shower, or adapting as a child grows.",
    bullets: [
      "Nursery and playroom organization",
      "Post-baby-shower setup",
      "First-time parent support",
      "Clothes, toys, and essentials organization",
      "Systems that grow with the child"
    ]
  },
  {
    title: "Services Bundle",
    eyebrow: "Full-service family support",
    description:
      "Combines childcare consultation, personalized childcare recommendations, and complete nursery organization.",
    bullets: [
      "Childcare consultation",
      "Personalized care recommendations",
      "Complete nursery organization",
      "Up to 2–3 months of follow-up support",
      "Up to 4 visits per month",
      "For rates, email KINdVibezOnly@gmail.com"
    ]
  }
];

export const privateChildcareServices = [
  {
    title: "Infant & Toddler Childcare",
    subtitle: "In Safe Hands",
    bullets: [
      "18 years of childcare experience",
      "Short-term and long-term childcare",
      "Safe, warm, welcoming environment",
      "Reliable, high-quality care"
    ]
  },
  {
    title: "Home Management & Personal Assistant Support",
    subtitle: "Organized and Thoughtful Family Support",
    bullets: [
      "Calendar coordination",
      "Errand support",
      "Playroom organization",
      "Wardrobe organization",
      "Daily routine support",
      "Household flow improvement"
    ]
  },
  {
    title: "Organization",
    subtitle: "Tidy Spaces, Peaceful Minds",
    bullets: [
      "Cycling and sorting wardrobes",
      "Toy organization",
      "Nursery systems",
      "Playroom organization",
      "Streamlined routines"
    ]
  }
];

export const rates = [
  { label: "Babysitting", value: "$35+/hr" },
  { label: "Nanny Position", value: "$35–45+/hr" },
  { label: "Home Management", value: "$40–50+/hr" },
  { label: "Childcare Consulting", value: "Email for rates" },
  { label: "Pediatric Sleep Consulting", value: "Email for rates" },
  { label: "Organization", value: "Email for rates" }
];

export const credentials = [
  "CA Trustline Certified",
  "CPR & First Aid Certified",
  "Certified Care Driver",
  "Member of the International Nanny Association"
];

export const testimonials = [
  {
    name: "Ramon Hache",
    location: "New Jersey",
    quote:
      "A dependable, punctual, and trustworthy presence for the family, with thoughtful support that helped the home feel more steady."
  },
  {
    name: "Toni B.",
    location: "New Jersey",
    quote:
      "Known for a loving connection with children and respectful, open communication with parents."
  },
  {
    name: "Ruju Tripathi",
    location: "Pennsylvania",
    quote:
      "Brought warmth and experience to infant and toddler care while helping routines feel more manageable."
  },
  {
    name: "Joanna Arkuss",
    location: "Beverly Hills",
    quote:
      "Supported the household with care that extended beyond childcare, including errands, routines, and child-centered organization."
  },
  {
    name: "Alison Cuddy",
    location: "New York City",
    quote:
      "Helped with pickups, drop-offs, homework, and daily structure while keeping communication clear and respectful."
  },
  {
    name: "Katie Devlin",
    location: "Beverly Hills",
    quote:
      "Created a warm connection with children while supporting manners, routines, and gentle discipline."
  },
  {
    name: "Jill Weinberg",
    location: "Culver City",
    quote:
      "Offered reliable household and childcare support, from light cooking to toys, clothes, and everyday family flow."
  },
  {
    name: "Sarah B",
    location: "Bel Air",
    quote:
      "Brought child development experience, including routines, sign language, and warm guidance for young children."
  }
];

export const blogPosts = [
  {
    title: "Budgeting for Childcare: Daycare vs. Nanny — How to Prep for the Real Costs",
    date: "Sep 11, 2025",
    readTime: "5 min",
    summary: "Childcare costs and planning for daycare vs. nanny expenses",
    image: images.blog[0]
  },
  {
    title: "The Rise of the Manny: Why Male Nannies Deserve More Recognition",
    date: "Jul 20, 2025",
    readTime: "3 min",
    summary: "Challenges stereotypes around male nannies",
    image: images.blog[1]
  },
  {
    title: "Choosing the Right Childcare: How to Make the Best Decision for Your Unique Family",
    date: "Jul 13, 2025",
    readTime: "3 min",
    summary: "Guidance for choosing between childcare options",
    image: images.blog[2]
  },
  {
    title: "It Takes a Village...and Sometimes, That Village is a Nanny",
    date: "Jul 3, 2025",
    readTime: "3 min",
    summary: "Explains why nannies are an investment in family peace, growth, and support",
    image: images.blog[3]
  }
];
