'use client'; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { useTheme } from '@/lib/theme/ThemeContext';

import HeroIllustration from '@/public/assets/images/hero-illustration.svg'; 

export const HeroSection: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className={`primary-surface ${theme} py-16 md:py-24`}>
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          
          <Typography variant="h1" className="!text-5xl md:!text-7xl">
            Operational Efficiency. Defined by Data.
          </Typography>
          
          <Typography variant="body" className="subtext max-w-xl text-xl">
            We architect digital automation solutions using the currently available and stable technology. Our focus is eliminating complexity to achieve measurable results.
          </Typography>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link href="#contact" passHref>
              <Button variant="primary" className="w-full sm:w-auto">
                Start Consultation
              </Button>
            </Link>
            
            <Link href="#features" passHref>
              <Button variant="ghost" className="w-full sm:w-auto">
                Explore Our Process
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
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