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
  homePath: '/tech',
  logoPath: '/assets/logos/tech/jpsampietri_tech.svg',
  navItems: [
    { name: 'About', href: '/tech#about' },
    { name: 'Value', href: '/tech#value' },
    { name: 'Experience', href: '/tech#experience' },
    { name: 'Technologies', href: '/tech#techmap' },
    { name: 'Contents', href: '/tech/contents' },
    { name: 'Global', href: '/' },
  ]
}
