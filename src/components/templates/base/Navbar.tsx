'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Typography } from '../../ui/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { ThemeSwitcher } from '../../ui/ThemeSwitcher';

export interface NavItem {
  name: string;
  href: string;
}

export interface NavbarProps {
  homePath: string
  logoPath: string;
  navItems: NavItem[];
}

const LOGO_WIDTH = 180;
const LOGO_HEIGHT = 50;

export const Navbar: React.FC<NavbarProps> = ({ homePath, logoPath, navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 surface shadow-md`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">

          <a href={homePath} className="flex items-center">
            <Image
              src={logoPath}
              alt="Logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              priority
              className="h-14 w-auto"
            />
          </a>

          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
                <Typography variant="body" className="!text-base !leading-none">
                  {item.name}
                </Typography>
              </Link>
            ))}

            <ThemeSwitcher />
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
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
