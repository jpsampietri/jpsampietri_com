'use client';

import './tyto.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { navbarProps } from '../../../public/assets/data/tyto/navbar';
import { footerProps } from '../../../public/assets/data/tyto/footer';
import { Banner } from '@/components/templates/Banner';
import { Footer } from '@/components/templates/base/Footer';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoLightPath={navbarProps.logoLightPath} logoDarkPath={navbarProps.logoDarkPath} navItems={navbarProps.navItems} />

      <Banner id='coming-soon' header='Coming soon...' subtext='Be carefull with spoilers' subtextClass='ghost' imageLightPath={navbarProps.logoLightPath} imageDarkPath={navbarProps.logoDarkPath} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
