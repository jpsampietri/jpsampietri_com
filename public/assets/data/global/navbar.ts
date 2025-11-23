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
  logoPath: '/assets/logos/global/signature_color_light.svg',
  navItems: [
    { name: 'About', href: '#hero' },
    { name: 'Brands', href: '#brands' },
    { name: 'Global', href: '/' },
  ]
}
