interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  homePath: string
  logoPath: string;
  navItems: NavItem[];
}

export const navbarProps:NavbarProps = {
  homePath: '/',
  logoPath: '/assets/logos/global/jpsampietri_logo_primary.svg',
  navItems: [
    { name: 'About', href: '#hero' },
    { name: 'Brands', href: '#brands' },
    { name: 'Global', href: '/' },
  ]
}
