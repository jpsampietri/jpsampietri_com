import FlashOnIcon from '@mui/icons-material/FlashOn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import MemoryIcon from '@mui/icons-material/Memory';
import { ActionProps } from '@/components/templates/ActionGrid';

export const featureProps:ActionProps = {
  id: 'value',
  header: 'The Fundamentals of an Organization-wide Perspective',
  subtext: 'Architecture is more than code; it is the precise alignment of business logic with digital fluidity.',
  actions: [
    {
      type: 'icon',
      icon: FlashOnIcon,
      title: 'Macro-Logic Synthesis',
      description: 'Translating complex business requirements into high-fidelity technical roadmaps that prioritize long-term gains.',
    },
    {
      type: 'icon',
      icon: ViewModuleIcon,
      title: 'Methodical Squad Leadership',
      description: 'Cultivating technical excellence in Agile environments by fostering a culture where quality is a habit, not a checklist.',
    },
    {
      type: 'icon',
      icon: MemoryIcon,
      title: 'Automation Ecosystems',
      description: 'Engineering mission-critical systems, treating every automation as a study in efficiency and precision.',
    },
  ]
}
