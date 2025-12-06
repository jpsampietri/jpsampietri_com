'use client';

import React from 'react';
import Image from 'next/image';

import { Typography } from '../ui/Typography';

export interface BannerProps {
  id: string;
  header: string;
  subtext: string;
  subtextClass: string;
  imagePath: string;
}

const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = 200;

export const Banner: React.FC<BannerProps> = ({ id, header, subtext, imagePath, subtextClass }) => {
  return (
    <section id={id} className={`surface py-12 md:py-18`}>
      <div className="container mx-auto text-center center-items">
        <div className="relative mb-8 flex justify-center items-center mx-auto p-20">
          <Image
            src={imagePath}
            alt="Abstract illustration of data architecture and digital flow"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            priority
            className=""
          />
        </div>


        <Typography variant="h1" className="">
          {header}
        </Typography>

        <Typography variant="body" className={`mt-4 subtext ${subtextClass}`}>
          {subtext}
        </Typography>

      </div>
    </section>
  );
};