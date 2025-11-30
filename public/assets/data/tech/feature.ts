import FlashOnIcon from '@mui/icons-material/FlashOn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MemoryIcon from '@mui/icons-material/Memory';
import { ActionProps } from '@/components/templates/ActionGrid';

export const featureProps:ActionProps = {
  id: 'value',
  header: 'Bridging Strategy and Code: The Dual Expertise',
  subtext: 'Detailed insight into Solutions Engineering, Agile Team Leadership, and Core Automation Systems',
  actions: [
    {
      type: 'icon',
      icon: FlashOnIcon,
      title: 'Quantified Value & Solutions Architecture',
      description: 'Translating intricate business logic into profitable, long-term technical roadmaps',
    },
    {
      type: 'icon',
      icon: ViewModuleIcon,
      title: 'Leading High-Performance Agile Squads',
      description: 'Fostering technical excellence and alignment across cross-functional engineering teams',
    },
    {
      type: 'icon',
      icon: MemoryIcon,
      title: 'Deep Expertise in Digital Automation Ecosystems',
      description: 'Architecting and deploying mission-critical systems across proprietary and open-source platforms',
    },
  ]
}
