interface CTAAction {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

interface CTAProps {
  id: string;
  header: string;
  subtext: string;
  actions: CTAAction[];
}

export const ctaProps:CTAProps = {
  id: 'cta',
  header: 'My Laboratory of Code and Curiosity',
  subtext: 'A curated gallery of projects that demonstrate my passion for rapid learning and full-stack solutions',
  actions: [
    { text: 'View Learning Portfolio', href: '/tech/contents', variant: 'primary' },
  ]
}