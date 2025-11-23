'use client';

import { Card } from '../ui/Card';
import { Typography } from '../ui/Typography';

import { useTheme } from '@/lib/theme/ThemeContext';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ElementType } from 'react';

type MuiIconComponent = ElementType<SvgIconProps>;

interface Feature {
  icon: MuiIconComponent;
  
}

interface Info {
  icon: MuiIconComponent;
  title: string;
  description: string;
}

interface InfoProps {
  id: string;
  header: string;
  subtext: string;
  infos: Info[];
}

export const InfoGrid: React.FC<InfoProps> = ({ id, header, subtext, infos }) => {
  const { theme, toggleTheme } = useTheme();
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
          {infos.map((info, index) => (
            <Card key={index} isElevated={true} className="text-left flex flex-col space-y-4">

              <info.icon className="h-8 w-8 text-primary" sx={{ fontSize: '32px' }} />

              <Typography variant="h2" className="!text-2xl !mt-0">
                {info.title}
              </Typography>

              <Typography variant="body" className="subtext !text-base">
                {info.description}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
