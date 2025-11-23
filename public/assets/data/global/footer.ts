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
  slogan: 'Curious and restless mind.',
  copyright: 'JPSampietri',
  socialLinks: [
  ]
}
