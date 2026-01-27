import { ActionProps } from '@/components/templates/ActionGrid';
import { generatePlatformActions } from '@/components/util/PlatformActionGenerator';

const generateContentProps = () => {
  return {
    id: 'contents',
    header: 'Projects Portfolio',
    subtext: '',
    actions: generatePlatformActions([
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
    ]),
  };
}

export const contentProps: ActionProps = generateContentProps();