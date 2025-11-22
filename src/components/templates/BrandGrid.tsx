'use client'; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { useTheme } from '@/lib/theme/ThemeContext';

const brandsData = [
  {
    name: 'JPSampietri Tech',
    logoPath: 'assets/logos/jpsampietri_tech.svg', 
    description: 'Digital Automation Specialist.',
    href: '/tech', 
  },
  {
    name: 'JPSampietri Photo',
    logoPath: '/assets/logos/jpsampietri_photo.svg',
    description: 'The beauty is on the details.',
    href: '/photo',
  },
  {
    name: 'JPSampietri Spotting',
    logoPath: '/assets/logos/jpsampietri_spotting.svg',
    description: 'Pistons, gas, camera, action.',
    href: '/spotting',
  },
  {
    name: 'Tyto Innovation Hub',
    logoPath: '/assets/logos/tyto_innovation.svg',
    description: 'What if...',
    href: '/tyto',
  },
];

export const BrandGrid: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className={`surface ${theme} py-16 md:py-24`}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-12">
          <Typography variant="h2" className="!text-5xl">
            Our Portfolio of Solutions
          </Typography>
          <Typography variant="body" className="subtext mt-4 text-xl max-w-2xl mx-auto">
            Select the specialization that aligns with your current strategic objectives.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandsData.map((brand, index) => (
            <Link key={index} href={brand.href} passHref>
              <Card isElevated={true} className="text-center cursor-pointer h-full transition-transform transform hover:scale-[1.02] duration-300">
                
                <div className="mx-auto mb-4 h-16 w-16 relative object-contain">
                  <Image
                    src={brand.logoPath}
                    alt={`${brand.name} Logo`}
                    fill={true}
                    priority={index < 3} 
                  />
                </div>
                
                <Typography variant="h2" className="!text-2xl !mt-0 !mb-2">
                  {brand.name}
                </Typography>
                
                <Typography variant="body" className="subtext !text-base">
                  {brand.description}
                </Typography>
                
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};