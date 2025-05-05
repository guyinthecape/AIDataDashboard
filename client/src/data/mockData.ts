// This file contains static data used throughout the application
// All data is for presentation purposes only

// Partner Logos
export const partnerLogos = [
  { name: "ACME AI" },
  { name: "NeuralCo" },
  { name: "DataSphere" },
  { name: "CogniTech" },
];

// Products
export const products = [
  {
    id: "dataforge",
    name: "DataForge™",
    tagline: "Custom Dataset Creation",
    icon: "fa-hammer",
    description: "Custom-built datasets tailored to your specific model requirements with legal compliance built-in.",
    longDescription: "DataForge is our flagship solution for AI teams who need specific, high-quality training data. Our expert data scientists and annotators build custom datasets tailored to your exact specifications, with compliance documentation included. Every dataset comes with a detailed data card, provenance tracking, and is ready for immediate implementation in your models."
  },
  {
    id: "atlas",
    name: "Atlas Library™",
    tagline: "Pre-built Dataset Library",
    icon: "fa-book-atlas",
    description: "Pre-labeled, verified datasets covering common AI training scenarios across multiple domains.",
    longDescription: "Atlas Library provides immediate access to our extensive collection of pre-verified, legally compliant datasets. Choose from hundreds of specialized collections across industries including healthcare, finance, e-commerce, and more. All datasets are regularly updated, fully documented, and ready for deployment within minutes of purchase."
  },
  {
    id: "prism",
    name: "Prism Packs™",
    tagline: "Diverse & Balanced Data Collections",
    icon: "fa-cube",
    description: "Diverse, balanced datasets ensuring your models perform equally well across demographics and contexts.",
    longDescription: "Prism Packs are specialized datasets designed to address representation gaps and ensure your AI models perform equally well across all demographics and contexts. Each pack contains carefully balanced data across gender, age, ethnicity, language, and other important variables, helping you build more inclusive and accurate AI systems."
  },
  {
    id: "sentinel",
    name: "Sentinel Audit™",
    tagline: "Data Quality & Compliance Analysis",
    icon: "fa-shield-alt",
    description: "Comprehensive evaluation tools to assess your existing datasets for bias, quality and compliance issues.",
    longDescription: "Sentinel Audit provides comprehensive evaluation tools to assess your existing datasets for bias, quality issues, and regulatory compliance. Our automated scanning combined with expert review identifies potential problems before they impact your models or create legal exposure. Receive detailed reports and remediation recommendations within 72 hours."
  },
  {
    id: "specicore",
    name: "SpeciCore™",
    tagline: "AI Data Infrastructure",
    icon: "fa-microchip",
    description: "End-to-end management of your AI training data lifecycle.",
    longDescription: "Our upcoming data infrastructure solution will provide end-to-end management of your AI training data lifecycle. Features will include automated collection, enrichment, version control, and continuous monitoring systems to ensure your models maintain peak performance and compliance over time.",
    comingSoon: true
  }
];

// Team Members
export const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI Ethics Researcher at MIT with 10+ years in data science and AI governance."
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-Founder",
    bio: "Previously led data infrastructure at a major tech company and specialized in scalable AI systems."
  },
  {
    name: "Aisha Patel",
    role: "Chief Legal Officer",
    bio: "Specialized in AI regulation and data privacy law with experience at major tech companies and regulatory bodies."
  }
];

// Pricing Plans
export const pricingPlans = [
  {
    name: "Ignite Plan",
    subtitle: "For Startups",
    price: 4000,
    unit: "/month",
    description: "Access to all essential services",
    features: [
      "Up to 100,000 datapoints per month",
      "Access to Atlas Library™ standard collections",
      "Basic compliance documentation",
      "Email support within 24 hours",
      "Monthly consultation call"
    ],
    ctaText: "Start with Ignite",
    primary: true
  },
  {
    name: "Precision Plan",
    subtitle: "Custom Datasets",
    price: 0.05,
    unit: "per labeled datapoint",
    description: "Pay only for what you need",
    features: [
      "Fully customized data collection",
      "Multi-level quality assurance",
      "Full compliance documentation",
      "Dedicated account manager",
      "48-hour turnaround on small batches"
    ],
    ctaText: "Contact Sales",
    primary: false
  }
];

// Dashboard Order Data
export const orderData = [
  {
    name: "EcomSentiment-GenZ",
    product: "DataForge",
    status: "Processing",
    delivery: "2 days",
    action: "Download"
  },
  {
    name: "HealthcareTerms-v2",
    product: "Atlas Library",
    status: "Completed",
    delivery: "Available",
    action: "Download"
  },
  {
    name: "FinTech-Queries",
    product: "Prism Packs",
    status: "QA Review",
    delivery: "5 days",
    action: "View Details"
  }
];

// Compliance Features
export const complianceFeatures = [
  {
    icon: "fas fa-id-card",
    title: "Data Cards",
    description: "Detailed documentation for every dataset including source information, collection methodology, and intended use cases."
  },
  {
    icon: "fas fa-route",
    title: "Audit Trails",
    description: "Complete change history and provenance tracking for all data points from acquisition through processing and delivery."
  },
  {
    icon: "fas fa-search",
    title: "Automated Scanning",
    description: "Advanced algorithms identify potential bias, unfair representation, and problematic content before delivery."
  },
  {
    icon: "fas fa-gavel",
    title: "Legal Review",
    description: "Our legal team validates all datasets against current regulations including GDPR, CCPA, and industry-specific requirements."
  },
  {
    icon: "fas fa-clipboard-check",
    title: "External Audit Readiness",
    description: "Prepared documentation and evidence packages for regulatory inspections or third-party verification requirements."
  }
];

// Compliance Badges
export const complianceBadges = [
  "GDPR-Ready",
  "PII-Safe",
  "Audit-Certified"
];
