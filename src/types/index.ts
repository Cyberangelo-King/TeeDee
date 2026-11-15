export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  customerOutcome: string;
  overview: string;
  scopeItems: string[];
  planningFactors: string[];
  useCases: string[];
  image: string;
  alt: string;
  iconName: string;
  relatedServices: string[];
  ctaLabel: string;
  approvalStatus: "draft" | "approved" | "needs-confirmation";
}

export interface Industry {
  slug: string;
  name: string;
  headline: string;
  description: string;
  challenges: string[];
  recommendedSolutions: string[];
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "security" | "power" | "automation" | "general";
}

export interface OfficeLocation {
  city: string;
  address: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  brandLine: string;
  rcNumber: string;
  phonePrimary: string;
  phoneSecondary: string;
  phonePrimaryDisplay: string;
  phoneSecondaryDisplay: string;
  whatsappNumber: string;
  email: string;
  domain: string;
  offices: OfficeLocation[];
}
