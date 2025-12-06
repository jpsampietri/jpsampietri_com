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
      title: 'Portões Abertos AFA',
      description: '08/2022',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgDqm6nK8r1wRq5TCVxlPz4GAZ_FxgxhWrV5ZtcGe932BbM?e=4TkQ0f',
    },
    {
      title: 'Campeonato Nacional de Acrobacia - CBA',
      description: '07/2019',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAZtC0TSKE7QJbznOQuJ6t3AfgrjVdRP7VyzwoTYlJ2tfI?e=eudOLu',
    },
    {
      title: 'Salão do automóvel de São Paulo',
      description: '11/2018',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgD76R_Ir2wCSrRc0OSx-xipAbjbHJbdZq_j_4m6gj1Xt_A?e=qrBXNP',
    },
    {
      title: '#20PEA',
      description: '09/2018',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgDyXN3M4Kz0SZ-meNepzzcjAee5SpFsyjJ7r1K-55vT7JI?e=3LrgGJ',
    },
    {
      title: 'Portões Abertos AFA',
      description: '08/2018',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAT_JzmsEmDSJWcEpeW5a0sAYDPAkFXkxMHdc0qBOUstRM?e=xRXHGK',
    },
    {
      title: 'V8 & cia Paulínia',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAN70SKi_foQapPjc8tU7MkAadV1DUJmo0LgzcjSrLAZkY',
    },
    {
      title: 'Variados',
      description: '',
      platform: 'onedrive',
      href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgCMEivDIs5cQ4heEaMR6QzMAeFSf7xJS3knRL6Et1T4JyQ?e=CEJCWS',
    },
  ]);