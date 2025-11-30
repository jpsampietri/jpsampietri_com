'use client';

import '../tech.css';
import { Navbar } from '@/components/templates/base/Navbar';
import { Footer } from '@/components/templates/base/Footer';
import { navbarProps } from '../../../../public/assets/data/tech/navbar';
import { footerProps } from '../../../../public/assets/data/tech/footer';
import { InfoGrid } from '@/components/templates/InfoGrid';
import { aiDisclaimerProps } from '../../../../public/assets/data/tech/aiDisclaimer';
import { ActionGrid } from '@/components/templates/ActionGrid';
import { contentProps } from '../../../../public/assets/data/tech/contents';
export default function LandingPage() {

  return (
    <main className="flex flex-col min-h-screen">

      <Navbar homePath={navbarProps.homePath} logoPath={navbarProps.logoPath} navItems={navbarProps.navItems} />

      <ActionGrid id={aiDisclaimerProps.id} header={aiDisclaimerProps.header} subtext={aiDisclaimerProps.subtext} actions={aiDisclaimerProps.actions}/>

      <ActionGrid id={contentProps.id} header={contentProps.header} subtext={contentProps.subtext} actions={contentProps.actions} />

      <Footer brandName={footerProps.brandName} slogan={footerProps.slogan} copyright={footerProps.copyright} socialLinks={footerProps.socialLinks} />

    </main>
  );
}
