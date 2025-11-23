import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { ElementType } from 'react';

type MuiIconComponent = ElementType<SvgIconProps>;

interface Feature {
  icon: MuiIconComponent;
  
}

interface SocialLink {
  icon: MuiIconComponent;
  href: string;
  label: string;
}

interface FooterProps {
  brandName: string;
  slogan: string;
  copyright: string;
  socialLinks: SocialLink[];
}

export const footerProps:FooterProps = {
  brandName: 'JPSampietri',
  slogan: 'Computer Scientist and Digital Automation specialist focused on operational efficiency and measured innovation.',
  copyright: 'JPSampietri',
  socialLinks: [
    { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jpsampietri/', label: 'LinkedIn'},
    { icon: GitHubIcon, href: 'https://github.com/jpsampietri', label: 'GitHub'},
  ]
}
