'use client';

import { Navbar } from '@/components/templates/base/Navbar';
import { Footer } from '@/components/templates/base/Footer';
import { navbarProps } from '../../../../public/assets/data/tech/navbar';
import { footerProps } from '../../../../public/assets/data/tech/footer';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoPath={navbarProps.logoPath} navItems={navbarProps.navItems} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
