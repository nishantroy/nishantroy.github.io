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
}

export const profile: Profile = {
  name: 'Nishant Roy',
  role: 'Sr. Staff Software Engineer, AI Experiences at Pinterest',
  roleTitle: 'Sr. Staff Software Engineer',
  roleOrg: 'AI Experiences · Pinterest',
  positioning: 'I rebuilt how Pinterest serves ads, then led ad products worth $500M+ a year.',
  positioningEmphasis: '$500M+ a year',
  intro: [
    "I change big systems without breaking them: a two-year, zero-downtime rewrite of Pinterest's highest-scale recommendation system, then the performance ad formats built on it, including AI-driven creative optimization.",
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
    'Invited speaker at 10+ companies on infrastructure scaling, Go performance and incident management',
  ],
  siteDescription:
    "Nishant Roy is a Sr. Staff Software Engineer on Pinterest's AI Experiences team. Previously he scaled Pinterest's ad delivery and led the org behind its performance ad formats.",
  palette: 'forest',
  contactPrompt: "I'm always glad to hear from people working on interesting things.",
  stats: [
    { value: '$300M+', label: 'a year from new ad formats alone' },
    { value: '8', label: 'public ad launches' },
    { value: '10+', label: "companies I've spoken at" },
    { value: '5', label: 'side projects, 2 with on-device AI' },
  ],
};
