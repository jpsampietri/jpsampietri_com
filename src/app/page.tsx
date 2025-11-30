'use client';

import './global.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { navbarProps } from '../../public/assets/data/globalComingSoon/navbar';
import { footerProps } from '../../public/assets/data/globalComingSoon/footer';
import { Banner } from '@/components/templates/Banner';
import { FooterEaster } from '@/components/templates/base/FooterEaster';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoPath={navbarProps.logoPath} navItems={navbarProps.navItems} />

      <Banner id='coming-soon' header='Coming soon...' subtext='Be carefull with spoilers' imagePath='/assets/logos/global/jpsampietri_logo_primary.svg' />

      <FooterEaster brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
