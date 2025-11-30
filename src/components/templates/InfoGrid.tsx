'use client';

import Image from 'next/image';
import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ElementType } from 'react';
import { useTheme } from '@/lib/theme/ThemeContext';

type MuiIconComponent = ElementType<SvgIconProps>;

export interface Info {
  type: 'icon' | 'image';
  icon?: MuiIconComponent;
  imagePathLight?: string;
  imagePathDark?: string;
  title: string;
  description: string;
}

export interface InfoProps {
  id: string;
  header: string;
  subtext: string;
  infos: Info[];
}

export const InfoGrid: React.FC<InfoProps> = ({ id, header, subtext, infos }) => {
  const { theme } = useTheme();

  return (
    <section id={id} className={`surface py-16 md:py-24`}>
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="text-center mb-12">
          <Typography variant="h2" className="!text-5xl highlight">
            {header}
          </Typography>
          <Typography variant="body" className="subtext mt-4 text-xl max-w-2xl mx-auto">
            {subtext}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infos.map((info, index) => {
            let graphics = [];
            if (info.type === 'icon' && info.icon) {
              graphics.push(<info.icon className="h-8 w-8 text-primary" sx={{ fontSize: '32px' }} />);
            } else if (info.type === 'image') {
              if (theme === 'light' && info.imagePathLight) {
                graphics.push(
                  <div className="mx-auto mb-4 h-16 w-16 relative object-contain">
                    <Image
                      src={info.imagePathLight}
                      alt={`${info.title} Image`}
                      fill={true}
                      priority={index < 3}
                    />
                  </div>
                );
              } else if (theme === 'dark' && info.imagePathDark) {
                graphics.push(
                  <div className="mx-auto mb-4 h-16 w-16 relative object-contain">
                    <Image
                      src={info.imagePathDark}
                      alt={`${info.title} Image`}
                      fill={true}
                      priority={index < 3}
                    />
                  </div>
                );
              }
            }
            return (
              <Card key={index} isElevated={true} className="text-left flex flex-col space-y-4">

                {graphics}

                <Typography variant="h2" className="!text-2xl !mt-0">
                  {info.title}
                </Typography>

                <Typography variant="body" className="subtext !text-base">
                  {info.description}
                </Typography>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};
