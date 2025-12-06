import { Tag, Action, ActionProps } from '@/components/templates/ActionGrid';

interface Content {
  title: string;
  description: string;
  platform: 'github' | 'behance' | 'medium' | 'dribbble' | 'onedrive'
  href: string;
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

      case 'onedrive':
        imagePathLight = '/assets/images/tech/social_media/onedrive.svg';
        imagePathDark = '/assets/images/tech/social_media/onedrive.svg';
        break;

      default:
        break;
    }
    let tags:Tag[] = content.tags ? content.tags : [];
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
      title: 'Curitiba',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgBfOof4QxifR5oWmZ2Wlk1VASFSh89KSqQhrUSZGiXnQNg?e=5bYihC',
    },
    {
      title: 'Holambra',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAYuNkzc7CCRZf0xr2T6UntAc5sCFzKp8_313OJuFw3QYQ?e=LxcHNk',
    },
    {
      title: 'Lua',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgCxKDY-6AV5T4igWx7gJnJtAd2HM-D3yN-qrEwQQi_WK2Y?e=CAh0DQ',
    },
    {
      title: 'Serra Negra',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAkjPzfT6oCSYSV4jpwTAPlAUXnvyOsRaq2IZMCKPcV4tY?e=mB4HTx',
    },
  ]);