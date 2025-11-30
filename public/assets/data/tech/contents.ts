import { Tag, Action, ActionProps } from '@/components/templates/ActionGrid';

enum GenAIUsage {
  Free = 0,
  Enhanced = 1,
  Based = 2,
}
const generateGenAITag = (genAiUsage: GenAIUsage) => {
  switch (genAiUsage) {
    case 0:
      return { text: 'GenAI Free', bgClass: 'secondary-surface', textClass: '' };
    case 1:
      return { text: 'GenAI Enhanced', bgClass: 'secondary-surface', textClass: '' };
    case 0:
      return { text: 'GenAI Based', bgClass: 'secondary-surface', textClass: '' };

    default:
      return { text: 'GenAI Unknow', bgClass: 'bg-gray-300', textClass: 'text-gray-800' };
  }
}

interface Content {
  title: string;
  description: string;
  platform: 'github' | 'behance' | 'medium' | 'dribbble'
  href: string;
  genAiUsage: GenAIUsage;
  tags?: Tag[];
}

const generateActionProps = (contents: Content[]) => {
  let actions:Action[] = [];

  contents.map(content => {
    let imagePathLight = '';
    let imagePathDark = '';
    switch (content.platform) {
      case 'github':
        imagePathLight = '/assets/images/tech/social_media/github.svg';
        imagePathDark = '/assets/images/tech/social_media/github.svg';
        break;

      case 'behance':
        imagePathLight = '/assets/images/tech/social_media/behance.svg';
        imagePathDark = '/assets/images/tech/social_media/behance.svg';
        break;

      case 'medium':
        imagePathLight = '/assets/images/tech/social_media/medium.svg';
        imagePathDark = '/assets/images/tech/social_media/medium.svg';
        break;

      case 'dribbble':
        imagePathLight = '/assets/images/tech/social_media/dribbble.svg';
        imagePathDark = '/assets/images/tech/social_media/dribbble.svg';
        break;

      default:
        break;
    }
    let tags:Tag[] = content.tags ? content.tags : [];
    tags.push(generateGenAITag(content.genAiUsage))
    actions.push(
      {
        type: 'image',
        imagePathLight: imagePathLight,
        imagePathDark: imagePathDark,
        title: content.title,
        description: content.description,
        href: content.href,
        target: '_blank',
        tags: tags,
      },
    )
  });
  return {
    id: 'contents',
    header: 'Projects Portfolio',
    subtext: '',
    actions: actions,
  };
}

export const contentProps: ActionProps = generateActionProps(
  [
    {
      title: 'JPSampietri Landing Page project',
      description: 'Landing page developed using ReactJS, NextJS, Tailwind CSS and Gemini',
      platform: 'github',
      href: 'https://github.com/jpsampietri/jpsampietri_com/tree/main?tab=readme-ov-file',
      genAiUsage: GenAIUsage.Enhanced,
    },
    {
      title: 'JPSampietri Tech Visual Identity',
      description: 'The visual identity creation for this page and brand',
      platform: 'behance',
      href: 'https://www.behance.net/gallery/197672199/Joao-Pedro-Sampietri-Identidade-Visual',
      genAiUsage: GenAIUsage.Free,
    },
  ]);