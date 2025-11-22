'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Imports from your UI layer
import { Button } from '../ui/Button';
import { Typography } from '../ui/Typography';
// Material Icons for the mobile menu
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Define the main navigation items
const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Principles', href: '#principles' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'About', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fixed navbar with a contrasting background
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Brand Name (Formal - Bai Jamjuree) */}
          <Link href="/" className="flex items-center">
            <Typography variant="cta" className="text-2xl text-gray-900 transition-colors hover:text-primary">
              [Your Brand Name]
            </Typography>
          </Link>

          {/* Desktop Navigation Links (Smart - Aptos body font for links) */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-primary transition-colors">
                <Typography variant="body" className="!text-base !leading-none">
                  {item.name}
                </Typography>
              </Link>
            ))}
            
            {/* Desktop CTA Button */}
            <Link href="#consultation" passHref>
              <Button variant="primary" className="ml-4 py-2 px-6">
                Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Formal, structured dropdown) */}
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
