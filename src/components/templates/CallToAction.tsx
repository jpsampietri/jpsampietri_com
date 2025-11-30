'use client';

import React from 'react';
import Link from 'next/link';
// Imports from your UI layer
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export interface Action {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface CTAProps {
  id: string;
  header: string;
  subtext: string;
  actions: Action[];
}

export const CallToAction: React.FC<CTAProps> = ({ id, header, subtext, actions }) => {
  const actionComponents = actions.map((action, index) => {
    return (
      <Link href={action.href} key={index} passHref>
        <Button variant={action.variant} className="text-lg px-10 py-4 shadow-lg hover:shadow-xl">
          {action.text}
        </Button>
      </Link>

    );
  });
  return (
    <section id={id} className={`secondary-surface py-16 md:py-20 text-center`}>
      <div className="container mx-auto px-4 max-w-5xl">

        <Typography
          variant="h2"
          className="!font-bold !text-4xl"
        >
          {header}
        </Typography>

        <Typography variant="body" className="subtext mt-4 mb-8 max-w-3xl mx-auto">
          {subtext}
        </Typography>

        {actionComponents}
      </div>
    </section>
  );
};
