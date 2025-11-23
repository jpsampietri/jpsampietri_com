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
  id: 'about',
  header: 'Strategic Technology Leadership for Scalable Digital Automation',
  subtext: 'Architect and lead the deployment of complex, high-value technical solutions, specializing in the Salesforce and IBM ODM ecosystems. My dual expertise as a Tech Lead and Solutions Engineer ensures a seamless transition from strategic vision to robust, performant execution.',
  imagePath: '/assets/images/tech/jpsampietri_tech_hero.png',
  actions: [
  ]
}