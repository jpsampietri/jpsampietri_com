import { ActionProps } from '@/components/templates/ActionGrid';
import { GenAIUsage, generatePlatformActions } from '@/components/util/PlatformActionGenerator';

const generateContentProps = () => {
  return {
    id: 'contents',
    header: 'Projects Portfolio',
    subtext: '',
    actions: generatePlatformActions([
    {
      title: 'JPSampietri Landing Page project',
      description: 'Landing page developed using ReactJS, NextJS, Tailwind CSS and Gemini',
      platform: 'github',
      href: 'https://github.com/jpsampietri/jpsampietri_com/tree/main?tab=readme-ov-file',
      genAiUsage: GenAIUsage.Enhanced,
    },
    {
      title: 'JPSampietri Tech Visual Identity',
      description: 'The visual identity creation for JPSampietri Tech brand',
      platform: 'behance',
      href: 'https://www.behance.net/gallery/197672199/Joao-Pedro-Sampietri-Identidade-Visual',
      genAiUsage: GenAIUsage.Free,
    },
  ]),
  };
}

export const contentProps: ActionProps = generateContentProps();