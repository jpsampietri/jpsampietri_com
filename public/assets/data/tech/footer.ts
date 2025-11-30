import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FooterProps } from '@/components/templates/base/Footer';

export const footerProps:FooterProps = {
  brandName: 'JPSampietri',
  slogan: 'Computer Scientist and Digital Automation specialist focused on operational efficiency and measured innovation.',
  copyright: 'JPSampietri',
  socialLinks: [
    { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jpsampietri/', label: 'LinkedIn'},
    { icon: GitHubIcon, href: 'https://github.com/jpsampietri', label: 'GitHub'},
  ]
}
