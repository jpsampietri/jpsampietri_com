import { CTAProps } from "@/components/templates/CallToAction";

export const ctaProps:CTAProps = {
  id: 'cta',
  header: 'My Laboratory of Code and Curiosity',
  subtext: 'A curated gallery of projects, technical articles, and educational courses. This is where I translate raw complexity into polished, technical solutions.',
  actions: [
    { text: 'View Learning Portfolio', href: '/tech/contents', variant: 'primary' },
  ]
}