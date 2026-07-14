/*
 CONTENT LOCKED.
 COPIED EXACTLY FROM THE APPROVED ORIGINAL WEBSITE.
 DO NOT EDIT, REWRITE OR PARAPHRASE.
*/

/*
 Provenance note — www.wovvtech.com refuses automated access (HTTP 403) and
 this build environment's network policy has no route to it, so every string
 below was recovered verbatim from search-engine index snapshots that quote
 the live pages. Each section carries a `source` note. Strings that could not
 be traced to a verbatim quote were REMOVED from the site rather than kept.
 Section names marked "approved brief" come from the client's redesign brief,
 which fixed the homepage flow (Hero → Trusted by Global Businesses →
 Business Overview → Products → Technology Services → Industries →
 Technology DNA → Why Choose WovVTech → About → Global Presence → CTA →
 Footer).

 Verified by scripts/verify-content.mjs: the production build fails if the
 rendered site adds, drops, or alters any string in this manifest.
*/

export const originalContent = {
  route: "/",

  meta: {
    // source: <title> and meta description of https://www.wovvtech.com/
    title: "WovVTech | AI-Powered SaaS Solutions for Business Growth",
    description:
      "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
  },

  navigation: {
    // source: page titles — /products/, /services/, /industry/*, /about-us/,
    // /contact-us/ ("Contact WovvTech for Best Tech Solution | Get in Touch")
    brand: "WovVTech",
    links: [
      { label: "Products", href: "#products" },
      { label: "Services", href: "#services" },
      { label: "Industries", href: "#industries" },
      { label: "About Us", href: "#about" },
      { label: "Contact Us", href: "#contact" },
    ],
    cta: "Get in Touch",
  },

  hero: {
    // source: homepage hero heading + supporting copy quoted by index
    // snapshots; description is the homepage meta description.
    heading: "Empowering Future!",
    subheading:
      "We are expert strategists, creative designers, and skillful developers focused on building experiences that distinguish your business through top-notch execution.",
    description:
      "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
    primaryCta: "Get in Touch",
    secondaryCta: "Products",
    // source: "Our suite of products is empowering users across 3000
    // locations in 50 countries…" — figures and nouns exactly as claimed.
    stats: [
      { value: "50", label: "countries" },
      { value: "3000", label: "locations" },
    ],
  },

  trust: {
    // section name: approved brief. Sentences: quoted from site/about pages.
    sectionName: "Trusted by Global Businesses",
    line: "WovVTech counts global fortune 500 companies as customers for technology services and products.",
    recognitions: [
      "Top Digital Transformation Company by IndustryWired",
      "Top 10 Best SaaS Companies in India by CEO Insights",
      "Top 20 Global SaaS Startups by CIO Review",
    ],
  },

  overview: {
    // section name: approved brief. Paragraphs: quoted verbatim.
    sectionName: "Business Overview",
    paragraphs: [
      "WovVTech is a global leader in driving digital transformation and operational excellence across industries and verticals. Our SaaS-based platform has made a significant impact on businesses in over 50 countries and 3000 locations, delivering greater operational efficiency, improved ROI, and enhanced customer experiences.",
      "Our suite of products is empowering users across 3000 locations in 50 countries to digitize their operations, get real-time decision-driven analytics, and improve productivity.",
    ],
  },

  products: {
    // heading: /products/ page title "Innovative Business Software Solutions".
    // description: quoted from /industry/retail-solutions/.
    // items: names, category labels and descriptions quoted from /products/.
    sectionName: "Products",
    heading: "Innovative Business Software Solutions",
    description:
      "WovVTech provides an AI-powered suite including POS & billing automation (WovVBIZ), customer experience management (WovVXM), retail audits (WovVIA), revenue assurance (WovVRA), workflow automation (WovVFlow), and data analytics (WovVBI).",
    learnMore: "Learn More",
    items: [
      {
        name: "WovVRA",
        category: "Revenue Assurance",
        description:
          "Additional revenues through accurate Automatic Daily Sales Reports and insights.",
      },
      {
        name: "WovVBI",
        category: "Business Intelligence",
        description: "Create DIY reports and gather insights.",
      },
      {
        name: "WovVMaps",
        category: "Indoor Wayfinding",
        description:
          "Map any indoor building and find your way without any external hardware requirement.",
      },
      {
        name: "WovVIA",
        category: "Inspection & Audit",
        description:
          "Create audit and survey forms to capture feedback and improve operations.",
      },
      {
        name: "WovVVideo",
        category: "CCTV Video Analytics Platform",
        description: "Footfall and customer behavior analysis.",
      },
      {
        name: "WovVLease",
        category: "Lease Management",
        description: "Manage leasing contracts.",
      },
      {
        name: "WovVXM",
        category: "Experience Management",
        description:
          "Improve and measure stakeholder feedback and satisfaction with NPS, CSAT, Employee satisfaction and more.",
      },
      {
        name: "WovVLoyalty",
        category: "Loyalty Management Solution",
        description: "Loyalty program for customer relationships.",
      },
      {
        name: "WovVBiz",
        category: "Business Automation & Billing",
        description: "Automate your business with a powerful billing system.",
      },
      {
        name: "WovVContest",
        category: "Vendor Management Solution",
        description: "Streamline vendor relationships.",
      },
      {
        name: "WovV360",
        category: "Tenant Communication Platform",
        description: "Boost tenant communication.",
      },
      {
        name: "WovVFlow",
        category: "Workflow Automation",
        description:
          "Automate and track business processes and workflows. Stay on top of things with status and SLA monitoring.",
      },
      {
        name: "OKEN",
        category: "Experience & Loyalty+ Mobile App",
        description: "Reward loyal customers and generate revenue.",
      },
    ],
  },

  services: {
    // heading: /services/ page title "Our Services: Innovative Tech
    // Solutions". intro + descriptions: quoted from /services/ and service
    // pages. Technology tokens are the exact lists inside those sentences.
    sectionName: "Technology Services",
    heading: "Our Services: Innovative Tech Solutions",
    intro:
      "Backed by our specialized Technology Services arm, we offer tailored technology consultation and implementation, enabling clients to stay ahead in the technology game.",
    items: [
      {
        name: "Oracle",
        description:
          "WovVTech has outstanding knowledge of enterprise software like Oracle and delivers innovative solutions.",
        technologies: ["Oracle"],
      },
      {
        name: "SAP",
        description:
          "Our team of seasoned SAP consultants provides tailored SAP services.",
        technologies: ["SAP"],
      },
      {
        name: "Salesforce",
        description:
          "We have a large pool of talented individuals prepared to advance your Salesforce tasks.",
        technologies: ["Salesforce"],
      },
      {
        name: "Mobile App Development",
        description:
          "WovVTech has built a strong mobile app development team with expertise in technologies like Native, React, JS, Android and iOS.",
        technologies: ["Native", "React", "JS", "Android", "iOS"],
      },
      {
        name: "Design and Branding",
        description:
          "We redefine experience through intuitive design and branding services. User interfaces using Angular, HTML, CSS, and Drupal, providing strategy, design, development, and support.",
        technologies: ["Angular", "HTML", "CSS", "Drupal"],
      },
      {
        name: "Blockchain",
        description:
          "WovVTech specializes in offering blockchain resource solutions, assisting companies of all sizes in assembling productive blockchain teams.",
        technologies: ["Blockchain"],
      },
      {
        name: "Trained Resources",
        description:
          "Our ready-to-deploy trained resources ensure seamless integration of solutions into your operations.",
        technologies: [],
      },
    ],
  },

  industries: {
    // names: exact fragments quoted from product/industry pages —
    // "Airports, Malls or Shopping centers, Retail businesses, etc." and
    // "malls, retail stores, airports, family entertainment centers (FECs),
    // B2B businesses". description: homepage meta description.
    sectionName: "Industries",
    description:
      "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
    items: [
      { name: "Malls or Shopping centers" },
      { name: "Airports" },
      { name: "Retail businesses" },
      { name: "Entertainment" },
      { name: "Family entertainment centers (FECs)" },
      { name: "B2B businesses" },
    ],
  },

  technologyDna: {
    // section name: approved brief. Body + principles: quoted verbatim.
    // Layer labels are the exact technology phrases inside the body sentence.
    sectionName: "Technology DNA",
    body: "Our patent-pending Application Platform as a Service (aPaaS) framework leverages Artificial Intelligence, Machine Learning, and the power of Cloud Computing to reduce the coding effort required for applications and platforms. It serves as the technological backbone that powers applications across multiple verticals.",
    layers: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Application Platform as a Service (aPaaS)",
    ],
    principles:
      "We prioritize configuration, flexibility, and scalability as guiding principles behind every product we create.",
  },

  whyChoose: {
    // section name: approved brief. All four statements quoted verbatim
    // from the site/about pages.
    sectionName: "Why Choose WovVTech",
    lead: "As the world's most customer-obsessed company, WovVTech focuses on building excellent AI-powered products to deliver seamless customer experience.",
    statements: [
      "Customers form the core of all our solutions. We start with our customers and work backward. We love to understand and reach out to our customers at every step of the process.",
      "Every warrior in the team takes ownership & accountability.",
      "We prioritize configuration, flexibility, and scalability as guiding principles behind every product we create.",
      "WovVTech counts global fortune 500 companies as customers for technology services and products.",
    ],
  },

  about: {
    // section name: approved brief. Company name as used by the site
    // ("WovV Technologies"). Statement quoted verbatim.
    sectionName: "About",
    companyName: "WovV Technologies",
    statement:
      "WovVTech combines technology, strategy, design, and intelligence to address complex business challenges.",
  },

  globalPresence: {
    // section name: approved brief. Locations: office locations listed by
    // the company (careers/contact listings). Address: registered address
    // as published. "WFH" was excluded (a work mode, not a location).
    sectionName: "Global Presence",
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
  },

  cta: {
    // heading: /contact-us/ page title ("Contact WovvTech for Best Tech
    // Solution | Get in Touch" — note the site's own casing "WovvTech").
    heading: "Contact WovvTech for Best Tech Solution",
    button: "Get in Touch",
    email: "sales@WovVTech.com",
  },

  footer: {
    // description: homepage meta description. Column links: product and
    // service names from above + page titles (About Us, Careers, Blog,
    // Brochures, Contact Us). Legal: /disclaimer/ page title "Disclaimer |
    // Terms of Use | Privacy Policy". Entity: named in Terms of Use
    // ("Technocompass Consulting Pvt Ltd"), with contact info@WovVTech.com.
    description:
      "AI-powered SaaS for malls, airports & enterprises—loyalty, indoor navigation, revenue assurance, CX & analytics to boost efficiency and growth.",
    columns: [
      {
        title: "Products",
        links: [
          "WovVRA",
          "WovVBI",
          "WovVMaps",
          "WovVIA",
          "WovVXM",
          "WovVFlow",
        ],
      },
      {
        title: "Services",
        links: ["Oracle", "SAP", "Salesforce", "Mobile App Development", "Blockchain"],
      },
      {
        title: "Company",
        links: ["About Us", "Careers", "Blog", "Brochures", "Contact Us"],
      },
    ],
    legalLinks: ["Disclaimer", "Terms of Use", "Privacy Policy"],
    entity: "Technocompass Consulting Pvt Ltd",
    emails: ["sales@WovVTech.com", "info@WovVTech.com"],
    address:
      "Flat No.804, Plot No.24, Dheeraj Gaurav Heights II-A D.P. Road, Off New Link Road, Andheri(W), Mumbai City, MUMBAI, Maharashtra, India, 400053",
  },
} as const;

export type OriginalContent = typeof originalContent;
