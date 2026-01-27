import { NavbarProps } from "@/components/templates/base/Navbar";

export const navbarProps:NavbarProps = {
  homePath: '/global',
  logoLightPath: '/assets/logos/global/jpsampietri_logo_primary.svg',
  logoDarkPath: '/assets/logos/global/jpsampietri_logo_primary.svg',
  navItems: [
    { name: 'About', href: '#hero' },
    { name: 'Brands', href: '#brands' },
    { name: 'Global', href: '/global' },
  ]
}
