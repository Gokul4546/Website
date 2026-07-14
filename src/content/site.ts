/**
 * WovVTech — single source of truth for ALL site copy.
 *
 * Content policy: the redesign must not alter site copy. Every user-visible
 * string is defined here (never inline in components) so the text can be
 * audited and corrected in one place against www.wovvtech.com.
 */

export const brand = {
  name: "WovVTech",
  metaTitle: "WovVTech | AI-Powered SaaS Solutions for Business Growth",
  metaDescription:
    "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
};

export const nav = {
  links: [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],
  cta: "Get in Touch",
};

export const hero = {
  badge: "Global Business Productivity SaaS company",
  heading: "Empowering Future!",
  subheading:
    "We are expert strategists, creative designers, and skillful developers focused on building experiences that distinguish your business through top-notch execution.",
  description:
    "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
  primaryCta: "Get in Touch",
  secondaryCta: "Explore Products",
  stats: [
    { value: "50+", label: "Countries" },
    { value: "3000+", label: "Locations" },
    { value: "13", label: "SaaS Products" },
    { value: "2016", label: "Founded" },
  ],
};

export const trust = {
  heading: "Trusted by Global Businesses",
  line: "WovVTech counts global fortune 500 companies as customers for technology services and products.",
  recognitions: [
    "Top Digital Transformation Company by IndustryWired",
    "Top 10 Best SaaS Companies in India by CEO Insights",
    "Top 20 Global SaaS Startups by CIO Review",
  ],
};

export const overview = {
  kicker: "Business Overview",
  heading: "Digital transformation and operational excellence",
  body: [
    "WovVTech is a global leader in driving digital transformation and operational excellence across industries and verticals. Our SaaS-based platform has made a significant impact on businesses in over 50 countries and 3000 locations, delivering greater operational efficiency, improved ROI, and enhanced customer experiences.",
    "Our suite of products is empowering users across 3000 locations in 50 countries to digitize their operations, get real-time decision-driven analytics, and improve productivity.",
  ],
};

export const products = {
  kicker: "Products",
  heading: "Innovative Business Software Solutions",
  description:
    "WovVTech provides an AI-powered suite including POS & billing automation (WovVBIZ), customer experience management (WovVXM), retail audits (WovVIA), revenue assurance (WovVRA), workflow automation (WovVFlow), and data analytics (WovVBI).",
  learnMore: "Learn More",
  items: [
    {
      name: "WovVMaps",
      tagline: "Indoor Wayfinding",
      description:
        "Map any indoor building and find your way without any external hardware requirement.",
      icon: "Map",
      hue: "electric",
    },
    {
      name: "WovVRA",
      tagline: "Revenue Assurance",
      description:
        "Additional revenues through accurate Automatic Daily Sales Reports and insights.",
      icon: "TrendingUp",
      hue: "violet",
    },
    {
      name: "WovVBI",
      tagline: "Business Intelligence",
      description: "Create DIY reports and gather insights.",
      icon: "BarChart3",
      hue: "cyan",
    },
    {
      name: "WovVIA",
      tagline: "Inspection & Audit",
      description:
        "Create audit and survey forms to capture feedback and improve operations.",
      icon: "ClipboardCheck",
      hue: "electric",
    },
    {
      name: "WovVVideo",
      tagline: "CCTV Video Analytics Platform",
      description: "Footfall and customer behavior analysis.",
      icon: "Video",
      hue: "violet",
    },
    {
      name: "WovVLease",
      tagline: "Lease Management",
      description: "Manage leasing contracts.",
      icon: "FileText",
      hue: "cyan",
    },
    {
      name: "WovVXM",
      tagline: "Experience Management",
      description:
        "Improve and measure stakeholder feedback and satisfaction with NPS, CSAT, Employee satisfaction and more.",
      icon: "HeartHandshake",
      hue: "electric",
    },
    {
      name: "WovVLoyalty",
      tagline: "Loyalty Management Solution",
      description: "Loyalty program for customer relationships.",
      icon: "Gift",
      hue: "violet",
    },
    {
      name: "WovVBiz",
      tagline: "Business Automation & Billing",
      description: "Automate your business with a powerful billing system.",
      icon: "Receipt",
      hue: "cyan",
    },
    {
      name: "WovVContest",
      tagline: "Vendor Management Solution",
      description: "Streamline vendor relationships.",
      icon: "Users",
      hue: "electric",
    },
    {
      name: "WovV360",
      tagline: "Tenant Communication Platform",
      description: "Boost tenant communication.",
      icon: "MessagesSquare",
      hue: "violet",
    },
    {
      name: "WovVFlow",
      tagline: "Workflow Automation",
      description:
        "Automate and track business processes and workflows. Stay on top of things with status and SLA monitoring.",
      icon: "Workflow",
      hue: "cyan",
    },
    {
      name: "OKEN",
      tagline: "Experience & Loyalty+ Mobile App",
      description: "Reward loyal customers and generate revenue.",
      icon: "Smartphone",
      hue: "electric",
    },
  ],
};

export const services = {
  kicker: "Technology Services",
  heading: "Our Services: Innovative Tech Solutions",
  description:
    "Backed by our specialized Technology Services arm, we offer tailored technology consultation and implementation, enabling clients to stay ahead in the technology game.",
  items: [
    {
      name: "Oracle",
      description:
        "WovVTech has outstanding knowledge of enterprise software like Oracle and delivers innovative solutions.",
      icon: "Database",
      chips: ["Enterprise Software", "Consulting", "Implementation"],
    },
    {
      name: "SAP",
      description:
        "Our team of seasoned SAP consultants provides tailored SAP services.",
      icon: "Boxes",
      chips: ["Consulting", "Integration", "Support"],
    },
    {
      name: "Salesforce",
      description:
        "We have a large pool of talented individuals prepared to advance your Salesforce tasks.",
      icon: "Cloud",
      chips: ["CRM", "Customization", "Automation"],
    },
    {
      name: "Mobile App Development",
      description:
        "WovVTech has built a strong mobile app development team with expertise in technologies like Native, React, JS, Android and iOS.",
      icon: "Smartphone",
      chips: ["Native", "React", "JS", "Android", "iOS"],
    },
    {
      name: "UI & Web Development",
      description:
        "We redefine experience through intuitive design and branding services. User interfaces using Angular, HTML, CSS, and Drupal, providing strategy, design, development, and support.",
      icon: "Palette",
      chips: ["Angular", "HTML", "CSS", "Drupal"],
    },
    {
      name: "Blockchain",
      description:
        "WovVTech specializes in offering blockchain resource solutions, assisting companies of all sizes in assembling productive blockchain teams.",
      icon: "Blocks",
      chips: ["Resource Solutions", "Team Building"],
    },
    {
      name: "Staff Augmentation",
      description:
        "Our ready-to-deploy trained resources ensure seamless integration of solutions into your operations.",
      icon: "UserPlus",
      chips: ["Ready-to-deploy", "Trained Resources"],
    },
  ],
};

export const industries = {
  kicker: "Industries",
  heading: "Solutions across industries and verticals",
  description:
    "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
  items: [
    { name: "Malls & Shopping Centers", icon: "Building2" },
    { name: "Airports", icon: "Plane" },
    { name: "Retail", icon: "ShoppingBag" },
    { name: "Entertainment", icon: "Clapperboard" },
    { name: "Family Entertainment Centers (FECs)", icon: "FerrisWheel" },
    { name: "B2B Businesses", icon: "Briefcase" },
  ],
};

export const technologyDna = {
  kicker: "Technology DNA",
  heading: "The technological backbone behind every product",
  body: "Our patent-pending Application Platform as a Service (aPaaS) framework leverages Artificial Intelligence, Machine Learning, and the power of Cloud Computing to reduce the coding effort required for applications and platforms. It serves as the technological backbone that powers applications across multiple verticals.",
  pillars: [
    {
      name: "Artificial Intelligence",
      icon: "BrainCircuit",
    },
    {
      name: "Machine Learning",
      icon: "Cpu",
    },
    {
      name: "Cloud Computing",
      icon: "CloudCog",
    },
    {
      name: "Low-Code aPaaS",
      icon: "Code2",
    },
  ],
  principles:
    "We prioritize configuration, flexibility, and scalability as guiding principles behind every product we create.",
};

export const whyChoose = {
  kicker: "Why Choose WovVTech",
  heading: "The world's most customer-obsessed company",
  body: "As the world's most customer-obsessed company, WovVTech focuses on building excellent AI-powered products to deliver seamless customer experience.",
  reasons: [
    {
      title: "Customer Obsessed",
      description:
        "Customers form the core of all our solutions. We start with our customers and work backward. We love to understand and reach out to our customers at every step of the process.",
      icon: "Heart",
    },
    {
      title: "Ownership & Accountability",
      description:
        "Every warrior in the team takes ownership & accountability.",
      icon: "ShieldCheck",
    },
    {
      title: "Configuration, Flexibility & Scalability",
      description:
        "We prioritize configuration, flexibility, and scalability as guiding principles behind every product we create.",
      icon: "Settings2",
    },
    {
      title: "Trusted by Fortune 500",
      description:
        "WovVTech counts global fortune 500 companies as customers for technology services and products.",
      icon: "Award",
    },
  ],
};

export const about = {
  kicker: "About",
  heading: "WovV Technologies",
  quote:
    "WovVTech combines technology, strategy, design, and intelligence to address complex business challenges.",
  body: [
    "WovVTech is a global leader in driving digital transformation and operational excellence across industries and verticals.",
    "We are expert strategists, creative designers, and skillful developers focused on building experiences that distinguish your business through top-notch execution.",
  ],
  timeline: [
    { year: "2016", event: "Founded" },
    { year: "50+", event: "Countries" },
    { year: "3000+", event: "Locations" },
  ],
};

export const globalPresence = {
  kicker: "Global Presence",
  heading: "Operations spanning multiple continents",
  locations: [
    "Mumbai",
    "Vadodara",
    "Chennai",
    "US",
    "Canada",
    "UK",
    "Singapore",
  ],
  address:
    "Flat No.804, Plot No.24, Dheeraj Gaurav Heights II-A D.P. Road, Off New Link Road, Andheri(W), Mumbai City, MUMBAI, Maharashtra, India, 400053",
};

export const cta = {
  heading: "Contact WovvTech for Best Tech Solution",
  description:
    "Grow your business with WovVTech's SaaS products and technology services.",
  button: "Get in Touch",
  email: "sales@WovVTech.com",
};

export const footer = {
  tagline:
    "Global Business Productivity SaaS company. AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
  columns: [
    {
      title: "Products",
      links: [
        "WovVMaps",
        "WovVRA",
        "WovVBI",
        "WovVIA",
        "WovVXM",
        "WovVFlow",
      ],
    },
    {
      title: "Services",
      links: [
        "Oracle",
        "SAP",
        "Salesforce",
        "Mobile App Development",
        "UI & Web Development",
        "Blockchain",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Brochures", "Contact Us"],
    },
  ],
  newsletter: {
    heading: "Stay ahead in the technology game",
    placeholder: "Enter your email",
    button: "Subscribe",
  },
  recognitions: [
    "Top Digital Transformation Company by IndustryWired",
    "Top 10 Best SaaS Companies in India by CEO Insights",
    "Top 20 Global SaaS Startups by CIO Review",
  ],
  email: "sales@WovVTech.com",
  copyright: "© 2026 WovV Technologies. All Rights Reserved.",
};
