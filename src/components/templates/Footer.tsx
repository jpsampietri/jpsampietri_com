import React from 'react';
import Link from 'next/link';
// Imports from your UI layer
import { Typography } from '../ui/Typography';
// NEW IMPORTS: Material Icons for social links
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';


const FooterLinks = [
  // ... (links data remains the same)
  {
    title: 'Services',
    links: ['Automation', 'Consultation', 'System Audit', 'Training']
  },
  {
    title: 'Company',
    links: ['About Us', 'Case Studies', 'Blog', 'Careers']
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Use', 'Accessibility']
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 border-b border-gray-700/50 pb-12">

          {/* Logo/Brand Identity */}
          <div className="col-span-2 lg:col-span-3 space-y-4">
            <Typography variant="cta" className="text-xl text-primary-lighter1">
              [Your Brand Name]
            </Typography>
            <Typography variant="body" className="!text-sm !text-gray-400 max-w-sm">
              Computer Scientist and Digital Automation specialist focused on operational efficiency and measured innovation.
            </Typography>
            <div className="flex space-x-4 pt-2">
              {/* Swapped Material Icons for Lucide */}
              <Link href="#" aria-label="LinkedIn"><LinkedInIcon className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="GitHub"><GitHubIcon className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Email"><MailIcon className="h-6 w-6 text-gray-400 hover:text-primary transition-colors" /></Link>
            </div>
          </div>

          {/* Navigation Links and Copyright remain the same */}
          {/* ... */}
        </div>

        {/* Copyright and Bottom Line */}
        <div className="pt-8 flex justify-between items-center flex-wrap">
          <Typography variant="caption" className="!text-gray-500">
            &copy; {new Date().getFullYear()} [Your Brand Name]. All Rights Reserved.
          </Typography>
          <Typography variant="caption" className="!text-gray-500 mt-2 sm:mt-0">
            Boilerplate developed using Next.js and Tailwind CSS.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
