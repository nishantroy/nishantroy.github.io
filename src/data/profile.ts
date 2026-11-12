// Site-wide profile. Copy here is the single source for the hero, metadata and footer.
export interface Profile {
  name: string;
  role: string;
  roleTitle: string;
  roleOrg: string;
  positioning: string;
  intro: string[];
  email: string;
  location: string;
  links: { label: string; href: string }[];
  /** Public résumé without phone number. TODO: add /resume.pdf to public/ and set this. */
  resume?: string;
  recognition: string[];
  siteDescription: string;
  palette: 'cobalt' | 'ember' | 'forest';
  contactPrompt: "I'm always glad to hear from people working on interesting things.",
  /** Phrase inside `positioning` to set in accent italic. */
  positioningEmphasis?: string;
  stats: { value: string; label: string }[];
  spokenAt: { names: string[]; more: string };
  angel: string;
  /** Invited talks at companies, shown under Writing & talks. */
  companyTalks: { count: number; highlights: string[] };
  /** Books I was a technical reviewer for. */
  reviews: { title: string; href: string; publisher: string }[];
}

export const profile: Profile = {
  name: 'Nishant Roy',
  role: 'Sr. Staff Software Engineer, AI Experiences at Pinterest',
  roleTitle: 'Sr. Staff Software Engineer',
  roleOrg: 'AI Experiences · Pinterest',
  positioning: 'I rebuilt how Pinterest serves ads, then led the ad products that run on it.',
  intro: [
    "Twice, as the ad business grew from under $1B to over $4B a year: first a redesign that let the ad corpus grow 60x, then a two-year rewrite with zero downtime. Ads serving is Pinterest's highest-traffic recommendation system, reaching more than 650 million people a month.",
    'Outside work, I build things I find useful and share them with friends and family.',
  ],
  email: 'roynishant96@gmail.com',
  location: 'San Francisco',
  links: [
    { label: 'GitHub', href: 'https://github.com/nishantroy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nishantroy/' },
    { label: 'Medium', href: 'https://medium.com/@roynishant96' },
  ],
  resume: undefined,
  recognition: [
    'Go Enterprise Advisory Board, 2022–2024',
    'Invited speaker at 14 companies on infrastructure scaling, Go performance and incident management',
  ],
  siteDescription:
    "Nishant Roy is a Sr. Staff Software Engineer on Pinterest's AI Experiences team. Previously he scaled Pinterest's ad delivery and led the org behind its performance ad formats.",
  palette: 'forest',
  contactPrompt: "I'm always glad to hear from people working on interesting things.",
  stats: [
    { value: '$500M+', label: 'a year from ad products I led' },
    { value: '10+', label: 'public product launches' },
    { value: '5+ yrs', label: 'leading engineering teams' },
  ],
  spokenAt: { names: ['SREcon', 'AWS', 'NASA', 'Snap', 'Figma', 'DoorDash', 'Shopify'], more: '15+' },
  angel: 'I also make small angel investments in early-stage startups.',
  companyTalks: {
    count: 14,
    highlights: ['AWS', 'Snap', 'NASA', 'Figma', 'DoorDash', 'Shopify', 'Etsy', 'Bain Capital Ventures', 'GGV Capital'],
  },
  reviews: [
    { title: 'Distributed Services with Go', href: 'https://pragprog.com/titles/tjgo/distributed-services-with-go/', publisher: 'Pragmatic Bookshelf' },
    { title: 'Programming Ruby 3.3 (5th edition)', href: 'https://pragprog.com/titles/ruby5/programming-ruby-3-3-5th-edition/', publisher: 'Pragmatic Bookshelf' },
  ],
};
