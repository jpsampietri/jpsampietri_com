interface HeroAction {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

interface HeroProps {
  id: string;
  header: string;
  subtext: string;
  imagePath: string;
  actions: HeroAction[];
}

export const heroProps:HeroProps = {
  id: 'hero',
  header: 'A Curious Mind. A Multidisciplinary Pursuit.',
  subtext: 'I thrive on complexity and the drive to quickly learn and execute. Explore a career defined by building next-generation technology, capturing dynamic stories through the lens, and launching ventures that define the future.',
  imagePath: '/assets/images/image.png',
  actions: [
  ]
}