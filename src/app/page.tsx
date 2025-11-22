import { Navbar } from '@/components/templates/Navbar'; 
import { HeroSection } from '@/components/templates/HeroSection';
import { BrandGrid } from '@/components/templates/BrandGrid';
import { FeatureGrid } from '@/components/templates/FeatureGrid';
import { CallToAction } from '@/components/templates/CallToAction';
import { Footer } from '@/components/templates/Footer';

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* 1. Header/Navigation Bar (Placed at the very top) */}
      <Navbar /> 

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Brand Gateway Grid (NEW - Proxy to specialized sites) */}
      <BrandGrid />

      {/* 3. Core Principles / Value Proposition */}
      <FeatureGrid />

      {/* 4. Contact/Final Call-to-Action */}
      <CallToAction />

      {/* 5. Footer */}
      <Footer />

    </main>
  );
}
