import { NavbarProps } from "@/components/templates/base/Navbar";

export const navbarProps:NavbarProps = {
  homePath: '/spotting',
  logoPath: '/assets/logos/spotting/jpsampietri_spotting_contrast_light.svg',
  navItems: [
    { name: 'About', href: '#hero' },
    { name: 'Brands', href: '#brands' },
    { name: 'Global', href: '/global' },
  ]
}
