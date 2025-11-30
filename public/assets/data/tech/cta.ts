import { CTAProps } from "@/components/templates/CallToAction";

export const ctaProps:CTAProps = {
  id: 'cta',
  header: 'My Laboratory of Code and Curiosity',
  subtext: 'A curated gallery of projects that demonstrate my passion for rapid learning and full-stack solutions',
  actions: [
    { text: 'View Learning Portfolio', href: '/tech/contents', variant: 'primary' },
  ]
}