interface Action {
  name: string;
  logoPathLight: string;
  logoPathDark: string;
  description: string;
  href: string;
}

interface ActionProps {
  id: string;
  header: string;
  subtext: string;
  brands: Action[];
}

export const brandProps:ActionProps = {
  id: 'brands',
  header: 'Four Facets of a Single Drive',
  subtext: 'Select a path to dive deeper into the discipline that interests you most',
  brands: [
    {
      name: 'JPSampietri Tech',
      logoPathLight: '/assets/logos/tech/jpsampietri_tech_contrast_light.svg',
      logoPathDark: '/assets/logos/tech/jpsampietri_tech_contrast_dark.svg',
      description: 'Digital Automation Specialist',
      href: '/tech',
    },
    {
      name: 'JPSampietri Photo',
      logoPathLight: '/assets/logos/photo/jpsampietri_photo_contrast_light.svg',
      logoPathDark: '/assets/logos/photo/jpsampietri_photo_contrast_dark.svg',
      description: 'The beauty is on the details',
      href: '/photo',
    },
    {
      name: 'JPSampietri Spotting',
      logoPathLight: '/assets/logos/spotting/jpsampietri_spotting_contrast_light.svg',
      logoPathDark: '/assets/logos/spotting/jpsampietri_spotting_contrast_dark.svg',
      description: 'Pistons, gas, camera, action',
      href: '/spotting',
    },
    {
      name: 'Tyto Innovation Hub',
      logoPathLight: '/assets/logos/tyto/tyto_innovation_contrast_light.svg',
      logoPathDark: '/assets/logos/tyto/tyto_innovation_contrast_dark.svg',
      description: 'What if...',
      href: '/tyto',
    },
  ]
};