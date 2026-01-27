'use client';

import '../global.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { ActionGrid } from '@/components/templates/ActionGrid';
import { Footer } from '@/components/templates/base/Footer';
import { HeroSection } from '@/components/templates/HeroSection';
import { navbarProps } from '../../../public/assets/data/global/navbar';
import { brandProps } from '../../../public/assets/data/global/brand';
import { footerProps } from '../../../public/assets/data/global/footer';
import { heroProps } from '../../../public/assets/data/global/hero';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoLightPath={navbarProps.logoLightPath} logoDarkPath={navbarProps.logoDarkPath} navItems={navbarProps.navItems} />

      <HeroSection id={heroProps.id} header={heroProps.header} subtext={heroProps.subtext} imagePath={heroProps.imagePath} actions={heroProps.actions} />

      <ActionGrid id={brandProps.id} header={brandProps.header} subtext={brandProps.subtext} actions={brandProps.actions} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
