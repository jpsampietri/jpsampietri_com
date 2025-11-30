'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';

export interface HeroAction {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface HeroProps {
  id: string;
  header: string;
  subtext: string;
  imagePath: string;
  actions: HeroAction[];
}

export const HeroSection: React.FC<HeroProps> = ({ id, header, subtext, imagePath, actions }) => {
  const actionComponents = actions.map( (action, index) => {
    return (
      <Link href={action.href} key={index} passHref>
        <Button variant={action.variant} className="w-full sm:w-auto">
          {action.text}
        </Button>
      </Link>

    );
  });
  return (
    <section id={id} className={`primary-surface py-16 md:py-24`}>
      <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-6 space-y-6">

          <Typography variant="h1" className="!text-5xl md:!text-7xl">
            {header}
          </Typography>

          <Typography variant="body" className="subtext max-w-xl text-xl">
            {subtext}
          </Typography>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            {actionComponents}
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <Image
            src={imagePath}
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