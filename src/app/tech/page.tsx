'use client';

import './tech.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { HeroSection } from '@/components/templates/HeroSection';
import { CallToAction } from '@/components/templates/CallToAction';
import { Footer } from '@/components/templates/base/Footer';
import { navbarProps } from '../../../public/assets/data/tech/navbar';
import { heroProps } from '../../../public/assets/data/tech/hero';
import { featureProps } from '../../../public/assets/data/tech/feature';
import { ctaProps } from '../../../public/assets/data/tech/cta';
import { footerProps } from '../../../public/assets/data/tech/footer';
import { Timeline } from '@/components/templates/Timeline';
import { experienceProps } from '../../../public/assets/data/tech/experience';
import { DataMapGrid } from '@/components/templates/DataMapGrid';
import { technologyDataMap } from '../../../public/assets/data/tech/technologies';
import { ActionGrid } from '@/components/templates/ActionGrid';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoPath={navbarProps.logoPath} navItems={navbarProps.navItems} />

      <HeroSection id={heroProps.id} header={heroProps.header} subtext={heroProps.subtext} imagePath={heroProps.imagePath} actions={heroProps.actions} />

      <ActionGrid id={featureProps.id} header={featureProps.header} subtext={featureProps.subtext} actions={featureProps.actions} />

      <Timeline id={experienceProps.id} header={experienceProps.header} subtext={experienceProps.subtext} total={experienceProps.total} current={experienceProps.current} currentLabel={experienceProps.currentLabel} markers={experienceProps.markers} />

      <DataMapGrid id={technologyDataMap.id} header={technologyDataMap.header} subtext={technologyDataMap.subtext} dataMapContent={technologyDataMap.dataMapContent}/>

      <CallToAction id={ctaProps.id} header={ctaProps.header} subtext={ctaProps.subtext} actions={ctaProps.actions} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
