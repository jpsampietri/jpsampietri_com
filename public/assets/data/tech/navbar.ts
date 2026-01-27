import { NavbarProps } from "@/components/templates/base/Navbar";

export const navbarProps:NavbarProps = {
  homePath: '/tech',
  logoLightPath: '/assets/logos/tech/jpsampietri_tech.svg',
  logoDarkPath: '/assets/logos/tech/jpsampietri_tech.svg',
  navItems: [
    { name: 'About', href: '/tech#about' },
    { name: 'Value', href: '/tech#value' },
    { name: 'Experience', href: '/tech#experience' },
    { name: 'Technologies', href: '/tech#techmap' },
    { name: 'Contents', href: '/tech/contents' },
    { name: 'Global', href: '/global' },
  ]
}
