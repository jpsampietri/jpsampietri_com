import React, { JSX } from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'h1' | 'h2' | 'body' | 'caption' | 'cta';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  ...props
}) => {
  let Tag: keyof JSX.IntrinsicElements;
  let baseClasses: string;

  switch (variant) {
    case 'h1':
      Tag = 'h1';
      // Bai Jamjuree (Bold), large text size, primary black text
      baseClasses = 'font-heading font-bold text-4xl md:text-6xl text-gray-50 tracking-tight'; 
      break;
    case 'h2':
      Tag = 'h2';
      // Bai Jamjuree (SemiBold)
      baseClasses = 'font-heading font-semibold text-3xl md:text-4xl text-gray-50 mt-6 mb-3';
      break;
    case 'body':
      Tag = 'p';
      // Aptos (Regular), secondary text color
      baseClasses = 'font-body font-normal text-lg text-gray-200 leading-relaxed'; 
      break;
    case 'caption':
      Tag = 'span';
      // Aptos (Regular), tertiary text color
      baseClasses = 'font-body font-normal text-sm text-gray-400'; 
      break;
    case 'cta':
      Tag = 'span';
      // Bai Jamjuree (SemiBold), used inside buttons
      baseClasses = 'font-heading font-semibold text-base uppercase tracking-wide'; 
      break;
    default:
      Tag = 'p';
      baseClasses = 'font-body text-base text-gray-50';
  }

  return (
    <Tag className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
