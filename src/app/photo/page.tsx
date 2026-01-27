'use client';

import '../global.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { navbarProps } from '../../../public/assets/data/photo/navbar';
import { footerProps } from '../../../public/assets/data/photo/footer';
import { Banner } from '@/components/templates/Banner';
import { Footer } from '@/components/templates/base/Footer';
import { PhotoGrid } from '@/components/templates/PhotoGrid';
import { highlightProps } from '../../../public/assets/data/photo/highlights';
import { ActionGrid } from '@/components/templates/ActionGrid';
import { contentProps } from '../../../public/assets/data/photo/contents';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoLightPath={navbarProps.logoLightPath} logoDarkPath={navbarProps.logoDarkPath} navItems={navbarProps.navItems} />

      <Banner id='coming-soon' header='JPSampietri Photo' subtext='The beauty is on the details' subtextClass='' imageLightPath={navbarProps.logoLightPath} imageDarkPath={navbarProps.logoDarkPath}/>

      <PhotoGrid id={highlightProps.id} header={highlightProps.header} subtext={highlightProps.subtext} photos={highlightProps.photos} />

      <ActionGrid id={contentProps.id} header={contentProps.header} subtext={contentProps.subtext} actions={contentProps.actions} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
