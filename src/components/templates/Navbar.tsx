'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { useTheme } from '@/lib/theme/ThemeContext';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Principles', href: '#principles' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
];

const PRIMARY_LOGO_PATH = '/assets/logos/jpsampietri_tech.svg';
const LOGO_WIDTH = 180;
const LOGO_HEIGHT = 50;

export const Navbar: React.FC = (params) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`sticky top-0 z-50 surface ${theme} shadow-md`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center">
            <Image
              src={PRIMARY_LOGO_PATH}
              alt="[Your Primary Brand] Logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
                <Typography variant="body" className="!text-base !leading-none">
                  {item.name}
                </Typography>
              </Link>
            ))}

            <ThemeSwitcher />

            <Link href="#consultation" passHref>
              <Button variant="primary" className="ml-4 py-2 px-6">
                Consultation
              </Button>
            </Link>
          </nav>

          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col space-y-2 p-4 border-t border-gray-100 bg-gray-50">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-primary transition-colors">
              <Typography variant="body" className="!text-lg">
                {item.name}
              </Typography>
            </Link>
          ))}
          <Link href="#consultation" passHref className="pt-4">
            <Button variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
              Consultation
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
