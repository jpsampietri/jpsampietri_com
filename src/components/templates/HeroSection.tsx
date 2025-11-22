// components/templates/HeroSection.tsx
'use client'; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Imports from your UI layer
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

// Placeholder for your local image (ensure this path and file exist in /public)
import HeroIllustration from '@/public/assets/images/hero-illustration.svg'; 

export const HeroSection: React.FC = () => {
  return (
    // Uses the light gray-50 background defined in tailwind.config.js
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text and CTAs */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* H1 - Bai Jamjuree, Bold, Formal Tone */}
          <Typography variant="h1" className="!text-5xl md:!text-7xl">
            Operational Efficiency. Defined by Data.
          </Typography>
          
          {/* Body Text - Aptos, Regular, Precise Tone */}
          <Typography variant="body" className="max-w-xl text-xl">
            We architect digital automation solutions using the currently available and stable technology. Our focus is eliminating complexity to achieve measurable results.
          </Typography>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            {/* Primary CTA Button - Uses brand Primary Color */}
            <Link href="#contact" passHref>
              <Button variant="primary" className="w-full sm:w-auto">
                Start Consultation
              </Button>
            </Link>
            
            {/* Secondary CTA Button - Uses secondary color for lower urgency */}
            <Link href="#features" passHref>
              <Button variant="ghost" className="w-full sm:w-auto">
                Explore Our Process
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Right Column: Illustration/Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {/* NOTE: You must place a file named hero-illustration.svg in /public/assets/images/ */}
          <Image
            src="/assets/images/hero-illustration.svg" 
            alt="Abstract illustration of data architecture and digital flow"
            width={600}
            height={450}
            priority
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};