import { ActionProps } from '@/components/templates/ActionGrid';
import { generatePlatformActions } from '@/components/util/PlatformActionGenerator';

const generateContentProps = () => {
  let contentProps: ActionProps = {
    id: 'contents',
    header: 'Projects Portfolio',
    subtext: '',
    actions: generatePlatformActions([
      {
        title: 'Holambra',
        description: '08/2023',
        platform: 'onedrive',
        href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAYuNkzc7CCRZf0xr2T6UntAc5sCFzKp8_313OJuFw3QYQ?e=LxcHNk',
      },
      {
        title: 'Curitiba',
        description: '05/2022',
        platform: 'onedrive',
        href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgBfOof4QxifR5oWmZ2Wlk1VASFSh89KSqQhrUSZGiXnQNg?e=5bYihC',
      },
      {
        title: 'Serra Negra',
        description: '07/2018',
        platform: 'onedrive',
        href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgAkjPzfT6oCSYSV4jpwTAPlAUXnvyOsRaq2IZMCKPcV4tY?e=mB4HTx',
      },
      {
        title: 'Variados',
        description: '',
        platform: 'onedrive',
        href: 'https://1drv.ms/f/c/a0cbbf4ea26068a8/IgCxKDY-6AV5T4igWx7gJnJtAd2HM-D3yN-qrEwQQi_WK2Y?e=CAh0DQ',
      },
    ]),
  }
  return contentProps;
}

export const contentProps: ActionProps = generateContentProps();