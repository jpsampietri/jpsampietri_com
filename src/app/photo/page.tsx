'use client';

import './photo.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { navbarProps } from '../../../public/assets/data/photo/navbar';
import { footerProps } from '../../../public/assets/data/photo/footer';
import { Banner } from '@/components/templates/Banner';
import { Footer } from '@/components/templates/base/Footer';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoPath={navbarProps.logoPath} navItems={navbarProps.navItems} />

      <Banner id='coming-soon' header='Coming soon...' subtext='Be carefull with spoilers' imagePath={navbarProps.logoPath} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
