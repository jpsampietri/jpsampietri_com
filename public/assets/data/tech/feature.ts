import FlashOnIcon from '@mui/icons-material/FlashOn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MemoryIcon from '@mui/icons-material/Memory';

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

export const featureProps:InfoProps = {
  id: 'value',
  header: 'Bridging Strategy and Code: The Dual Expertise',
  subtext: 'Detailed insight into Solutions Engineering, Agile Team Leadership, and Core Automation Systems',
  infos: [
    {
      icon: FlashOnIcon,
      title: 'Quantified Value & Solutions Architecture',
      description: 'Translating intricate business logic into profitable, long-term technical roadmaps',
    },
    {
      icon: ViewModuleIcon,
      title: 'Leading High-Performance Agile Squads',
      description: 'Fostering technical excellence and alignment across cross-functional engineering teams',
    },
    {
      icon: MemoryIcon,
      title: 'Deep Expertise in Digital Automation Ecosystems',
      description: 'Architecting and deploying mission-critical systems across proprietary and open-source platforms',
    },
  ]
}
