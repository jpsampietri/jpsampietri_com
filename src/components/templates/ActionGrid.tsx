'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { useTheme } from '@/lib/theme/ThemeContext';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ElementType } from 'react';

type MuiIconComponent = ElementType<SvgIconProps>;

export interface Tag {
  text: string;
  bgClass: string;
  textClass: string;
}

export interface Action {
  type: 'icon' | 'image';
  icon?: MuiIconComponent;
  imagePathLight?: string;
  imagePathDark?: string;
  title: string;
  description: string;
  href?: string;
  target?: '_self' | '_blank';
  tags?: Tag[];
}

export interface ActionProps {
  id: string;
  header: string;
  subtext: string;
  actions: Action[];
}

export const ActionGrid: React.FC<ActionProps> = ({ id, header, subtext, actions }) => {
  const { theme } = useTheme();

  return (
    <section id={id} className={`surface py-16 md:py-24`}>
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="mb-12 text-center">
          <Typography variant="h2" className="!text-5xl">
            {header}
          </Typography>
          <Typography variant="body" className="subtext mt-4 text-xl max-w-2xl mx-auto">
            {subtext}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => {
            let graphicElement;
            if (action.type === 'icon' && action.icon) {
              graphicElement = (
                <div className='py-4'>
                  <action.icon className="h-8 w-8 text-primary" sx={{ fontSize: '32px' }} />
                </div>
              );
            } else if (action.type === 'image') {
              if (theme === 'light' && action.imagePathLight) {
                graphicElement = (
                  <div className="mx-auto mb-4 h-16 w-32 relative object-contain">
                    <Image
                      src={action.imagePathLight}
                      alt={`${action.title} Image`}
                      fill={true}
                      priority={index < 3}
                    />
                  </div>
                );
              } else if (theme === 'dark' && action.imagePathDark) {
                graphicElement = (
                  <div className="mx-auto mb-4 h-16 w-32 relative object-contain">
                    <Image
                      src={action.imagePathDark}
                      alt={`${action.title} Image`}
                      fill={true}
                      priority={index < 3}
                    />
                  </div>
                );
              }
            }
            let tagElements;
            if (action.tags) {
               tagElements = action.tags.map( (tag, tagIndex) => {
                return (
                    <div key={tagIndex} className={`px-3 py-1 rounded-full text-xs font-semibold primary-surface inline-block ${tag.bgClass}`}>
                      <p className={tag.textClass}>{tag.text}</p>
                    </div>
                );
              });
            }

            const cardElement = (
              <Card key={index} isElevated={true} className="text-center h-full">

                {graphicElement}

                <Typography variant="h2" className="!text-2xl !mt-0 !mb-2">
                  {action.title}
                </Typography>

                <Typography variant="body" className="subtext !text-base">
                  {action.description}
                </Typography>

                {tagElements && (
                  <div className="w-full flex justify-center gap-2 mt-2">
                    {tagElements}
                  </div>
                )}
              </Card>

            );

            let returnElement;
            if (action.href) {
              returnElement = (
                <a key={index} href={action.href} className="cursor-pointer transition-transform transform hover:scale-[1.02] duration-300" target={action.target}>
                  {cardElement}
                </a>
              )
            } else {
              returnElement = cardElement;
            }
            return returnElement;
          })}
        </div>
      </div>
    </section>
  );
};