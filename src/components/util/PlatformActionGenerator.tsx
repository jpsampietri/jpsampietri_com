import { Tag, Action } from '@/components/templates/ActionGrid';

export enum GenAIUsage {
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
    case 2:
      return { text: 'GenAI Based', bgClass: 'secondary-surface', textClass: '' };

    default:
      return { text: 'GenAI Unknow', bgClass: 'bg-gray-300', textClass: 'text-gray-800' };
  }
}

interface Content {
  title: string;
  description: string;
  platform: 'github' | 'behance' | 'medium' | 'dribbble' | 'onedrive'
  href: string;
  genAiUsage?: GenAIUsage;
  tags?: Tag[];
}

export const generatePlatformActions = (contents: Content[]) => {
  const actions:Action[] = [];

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

      case 'onedrive':
        imagePathLight = '/assets/images/tech/social_media/onedrive.svg';
        imagePathDark = '/assets/images/tech/social_media/onedrive.svg';
        break;

      default:
        break;
    }
    
    const tags:Tag[] = content.tags ? content.tags : [];

    if (content.genAiUsage !== undefined) {
      tags.push(
        generateGenAITag(content.genAiUsage)
      );
    }

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
  return actions;
}
