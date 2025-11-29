'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { useTheme } from '@/lib/theme/ThemeContext';

interface Action {
  name: string;
  logoPathLight: string;
  logoPathDark: string;
  description: string;
  href: string;
}

interface ActionProps {
  id: string;
  header: string;
  subtext: string;
  brands: Action[];
}

export const ActionGrid: React.FC<ActionProps> = ({ id, header, subtext, brands }) => {
  const { theme } = useTheme();

  return (
    <section id={id} className={`surface py-16 md:py-24`}>
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="mb-12 text-center">
          <Typography variant="h2" className="!text-5xl">
            {header}
          </Typography>
          <Typography variant="body" className="subtext mt-4 text-xl max-w-2xl mx-auto">
            {subtext}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <a key={index} href={brand.href}>
              <Card isElevated={true} className="text-center cursor-pointer h-full transition-transform transform hover:scale-[1.02] duration-300">

                <div className="mx-auto mb-4 h-16 w-16 relative object-contain">
                  <Image
                    src={theme === 'light' ? brand.logoPathLight : brand.logoPathDark}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};