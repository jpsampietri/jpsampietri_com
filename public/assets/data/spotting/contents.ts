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
      title: '#20PEA',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgDyXN3M4Kz0SZ-meNepzzcjAee5SpFsyjJ7r1K-55vT7JI?e=3LrgGJ',
    },
    {
      title: 'Portões Abertos AFA 2018',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAT_JzmsEmDSJWcEpeW5a0sAYDPAkFXkxMHdc0qBOUstRM?e=xRXHGK',
    },
    {
      title: '#23PEA',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgB5ntVfswYDTIeI3HxJGFHAAYZVbuVW87WVYeh6jH8qjcY?e=QUwxKi',
    },
    {
      title: 'Portões Abertos AFA 2019',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgCqr4mBBdPKRKE5tRzyhZxtAXQs4EhX6Q-nxozLRnfWgMc?e=a3tTJ2',
    },
    {
      title: 'Encontro de antigos',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgBSwmXE49KmQ6UYV4OGZw6pAQg_k0vOo6iqh927iMnUuEc?e=ELVfRb',
    },
    {
      title: 'V8 & cia Paulínia',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAN70SKi_foQapPjc8tU7MkAadV1DUJmo0LgzcjSrLAZkY?e=Jv6pgQ',
    },
  ]);