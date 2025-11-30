import { ActionProps } from "@/components/templates/ActionGrid";

export const brandProps:ActionProps = {
  id: 'brands',
  header: 'Four Facets of a Single Drive',
  subtext: 'Select a path to dive deeper into the discipline that interests you most',
  actions: [
    {
      type: 'image',
      imagePathLight: '/assets/logos/tech/jpsampietri_tech_contrast_light.svg',
      imagePathDark: '/assets/logos/tech/jpsampietri_tech_contrast_dark.svg',
      title: 'JPSampietri Tech',
      description: 'Digital Automation Specialist',
      href: '/tech',
      target: '_self',
    },
    {
      type: 'image',
      imagePathLight: '/assets/logos/photo/jpsampietri_photo_contrast_light.svg',
      imagePathDark: '/assets/logos/photo/jpsampietri_photo_contrast_dark.svg',
      title: 'JPSampietri Photo',
      description: 'The beauty is on the details',
      href: '/photo',
      target: '_self',
    },
    {
      type: 'image',
      imagePathLight: '/assets/logos/spotting/jpsampietri_spotting_contrast_light.svg',
      imagePathDark: '/assets/logos/spotting/jpsampietri_spotting_contrast_dark.svg',
      title: 'JPSampietri Spotting',
      description: 'Pistons, gas, camera, action',
      href: '/spotting',
      target: '_self',
    },
    {
      type: 'image',
      imagePathLight: '/assets/logos/tyto/tyto_innovation_contrast_light.svg',
      imagePathDark: '/assets/logos/tyto/tyto_innovation_contrast_dark.svg',
      title: 'Tyto Innovation Hub',
      description: 'What if...',
      href: '/tyto',
      target: '_self',
    },
/*    {
      type: 'image',
      imagePathLight: '/assets/logos/global/jpsampietri_logo_contrast_light.svg',
      imagePathDark: '/assets/logos/global/jpsampietri_logo_contrast_dark.svg',
      title: 'Bookshelf',
      description: 'Opinions about things I read',
      href: '/tyto',
      target: '_self',
    },
    {
      type: 'image',
      imagePathLight: '/assets/logos/global/jpsampietri_logo_contrast_light.svg',
      imagePathDark: '/assets/logos/global/jpsampietri_logo_contrast_dark.svg',
      title: 'DIY Projects',
      description: 'When I can\'t find what I want',
      href: '/tyto',
      target: '_self',
    },
*/
  ]
};