'use client'; 

import React from 'react';
import Link from 'next/link';
// Imports from your UI layer
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import { useTheme } from '@/lib/theme/ThemeContext';

export const CallToAction: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    // Uses the secondary brand color for high visibility
    <section className={`secondary-surface ${theme} py-16 md:py-20 text-center`}>
      <div className="container mx-auto px-4 max-w-5xl">

        <Typography
          variant="h2"
          className="!text-white !font-bold !text-4xl"
        >
          Ready to Implement Measured Innovation?
        </Typography>

        <Typography variant="body" className="subtext mt-4 mb-8 max-w-3xl mx-auto">
          Schedule an assessment with our digital automation specialists to achieve operational efficiency.
        </Typography>

        <Link href="#assessment" passHref>
          <Button variant="primary" className="text-lg px-10 py-4 shadow-lg hover:shadow-xl">
            Book Assessment Today
          </Button>
        </Link>
      </div>
    </section>
  );
};
