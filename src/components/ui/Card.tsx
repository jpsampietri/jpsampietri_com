'use client'; 

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isElevated?: boolean; 
}

export const Card: React.FC<CardProps> = ({ children, className = '', isElevated = false, ...props }) => {

  const baseClasses = `variant-surface p-8 rounded-lg border border-gray-400/50 transition-shadow duration-300`;
  
  // Use professional shadow system
  const elevationClasses = isElevated 
    ? 'shadow-xl hover:shadow-2xl' 
    : 'shadow-sm';             

  return (
    <div 
      className={`${baseClasses} ${elevationClasses} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};
