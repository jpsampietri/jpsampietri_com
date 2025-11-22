import React from 'react';
import Link from 'next/link';
// Imports from your UI layer
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export const CallToAction: React.FC = () => {
  return (
    // Uses the secondary brand color for high visibility
    <section className="bg-secondary py-16 md:py-20 text-center">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Heading - Bai Jamjuree, Bold, White text */}
        <Typography
          variant="h2"
          className="!text-white !font-bold !text-4xl"
        >
          Ready to Implement Measured Innovation?
        </Typography>

        {/* Subtext - Aptos, Regular, lighter color for contrast */}
        <Typography variant="body" className="mt-4 mb-8 text-secondary-lighter1 max-w-3xl mx-auto">
          Schedule an assessment with our digital automation specialists to achieve operational efficiency.
        </Typography>

        {/* Primary CTA Button */}
        <Link href="#assessment" passHref>
          <Button variant="primary" className="text-lg px-10 py-4 shadow-lg hover:shadow-xl">
            Book Assessment Today
          </Button>
        </Link>
      </div>
    </section>
  );
};
