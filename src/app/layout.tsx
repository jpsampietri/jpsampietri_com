import { baiJamjuree, questrial } from '../lib/fonts';
import { ReduxProvider } from '../lib/redux/provider';
import { ThemeProvider } from '@/lib/theme/ThemeContext'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${baiJamjuree.variable} ${questrial.variable} antialiased`}
    >
      <body>
        <ThemeProvider>
          <ReduxProvider> 
            {children}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
