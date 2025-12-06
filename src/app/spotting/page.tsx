'use client';

import './spotting.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { navbarProps } from '../../../public/assets/data/spotting/navbar';
import { footerProps } from '../../../public/assets/data/spotting/footer';
import { Banner } from '@/components/templates/Banner';
import { Footer } from '@/components/templates/base/Footer';
import { PhotoGrid } from '@/components/templates/PhotoGrid';
import { highlightProps } from '../../../public/assets/data/spotting/highlights';
import { ActionGrid } from '@/components/templates/ActionGrid';
import { contentProps } from '../../../public/assets/data/spotting/contents';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoPath={navbarProps.logoPath} navItems={navbarProps.navItems} />

      <Banner id='coming-soon' header='JPSampietri Spotting' subtext='Pistons, gas, camera, action' subtextClass='' imagePath={navbarProps.logoPath} />

      <PhotoGrid id={highlightProps.id} header={highlightProps.header} subtext={highlightProps.subtext} photos={highlightProps.photos} />

      <ActionGrid id={contentProps.id} header={contentProps.header} subtext={contentProps.subtext} actions={contentProps.actions} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
