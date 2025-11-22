import localFont from 'next/font/local';

// 1. Primary Typeface: Bai Jamjuree (Headings, CTAs)
export const baiJamjuree = localFont({
  src: [
    {
      // Ensure these paths correctly point to your downloaded .woff2 files 
      // relative to the compiled location (which Next.js handles)
      path: '../../public/fonts/Bai_Jamjuree/BaiJamjuree-SemiBold.ttf',
      weight: '600', 
      style: 'normal',
    },
    {
      path: '../../public/fonts/Bai_Jamjuree/BaiJamjuree-Bold.ttf',
      weight: '700', 
      style: 'normal',
    },
  ],
  variable: '--font-heading', // Maps to the font-heading class in Tailwind
  display: 'swap',
});

// 2. Secondary Typeface: Aptos (Body Text)
export const questrial = localFont({
  src: [
    {
      path: '../../public/fonts/Questrial/Questrial-Regular.ttf',
      weight: '400', 
      style: 'normal',
    },
    {
      path: '../../public/fonts/Questrial/Questrial-Regular.ttf',
      weight: '600', 
      style: 'normal',
    },
  ],
  variable: '--font-body', // Maps to the font-body class in Tailwind
  display: 'swap',
});
