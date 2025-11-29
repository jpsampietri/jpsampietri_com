'use client'; 

import React from 'react';
import Link from 'next/link';
import { Typography } from '../../ui/Typography';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ElementType } from 'react';

type MuiIconComponent = ElementType<SvgIconProps>;

interface SocialLink {
  icon: MuiIconComponent;
  href: string;
  label: string;
}

interface FooterProps {
  brandName: string;
  slogan: string;
  copyright: string;
  socialLinks: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ brandName, slogan, copyright, socialLinks }) => {
  const linkComponents = socialLinks.map((socialLink, index) => {
    return (
      <Link key={index} href={socialLink.href} aria-label={socialLink.label} target="_blank"><socialLink.icon className="h-6 w-6 hover:text-primary transition-colors" /></Link>
    );
  });
  return (
    <footer className={`surface pt-16 pb-8`}>
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 border-b border-gray-700/50 pb-12">

          <div className="col-span-2 lg:col-span-3 space-y-4">
            <Typography variant="cta" className="text-xl">
              {brandName}
            </Typography>
            <Typography variant="body" className="!text-sm max-w-sm">
              {slogan}
            </Typography>
            <div className="flex space-x-4 pt-2">
              {linkComponents}
            </div>
          </div>

        </div>

        <div className="pt-8 flex justify-between items-center flex-wrap">
          <Typography variant="caption" className="!text-gray-500">
            &copy; {new Date().getFullYear()} {copyright}. All Rights Reserved.
          </Typography>
          <Typography variant="caption" className="!text-gray-500 mt-2 sm:mt-0">
            Powered by Next.js and Tailwind CSS. Enhanced with Gemini.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
