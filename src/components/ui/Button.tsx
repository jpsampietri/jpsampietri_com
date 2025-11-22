import React from 'react';
import { Typography } from './Typography'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  let baseClasses =
    'inline-flex items-center justify-center rounded-lg px-8 py-3 transition-colors duration-200 focus:outline-none focus:ring-4';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      // FIX APPLIED HERE: Explicitly using 'text-white' and ensuring the background
      // is a DARKER shade (primary) for contrast.
      variantClasses =
        'bg-primary text-white hover:bg-primary-lighter1 active:bg-primary-darker1 focus:ring-primary/50 shadow-lg';
      break;
    case 'secondary':
      // Secondary buttons are also assumed to be on a dark background
      variantClasses =
        'bg-secondary text-white hover:bg-secondary-lighter1 active:bg-secondary-darker1 focus:ring-secondary/50 shadow-md';
      break;
    case 'ghost':
      // Ghost buttons typically have a light background and dark text
      variantClasses =
        'bg-transparent border border-gray-400 text-gray-900 hover:bg-gray-100 active:bg-gray-400 focus:ring-gray-400/50';
      break;
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {/* The Typography component is now wrapped inside a button that explicitly 
          sets the text color via Tailwind classes in variantClasses. */}
      <Typography variant="cta" className="text-inherit">
        {children}
      </Typography>
    </button>
  );
};