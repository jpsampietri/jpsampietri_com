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
      baseClasses = 'font-heading font-bold text-4xl md:text-6xl tracking-tight'; 
      break;
    case 'h2':
      Tag = 'h2';
      baseClasses = 'font-heading font-semibold text-3xl md:text-4xl mt-6 mb-3';
      break;
    case 'body':
      Tag = 'p';
      baseClasses = 'font-body font-normal text-lg leading-relaxed'; 
      break;
    case 'caption':
      Tag = 'span';
      baseClasses = 'font-body font-normal text-sm'; 
      break;
    case 'cta':
      Tag = 'span';
      baseClasses = 'font-heading font-semibold text-base uppercase tracking-wide'; 
      break;
    default:
      Tag = 'p';
      baseClasses = 'font-body text-base';
  }

  return (
    <Tag className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
