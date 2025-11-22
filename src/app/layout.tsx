import './globals.css';
import { baiJamjuree, questrial } from '../lib/fonts';
import { ReduxProvider } from '../lib/redux/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Inject custom font variables into the html tag
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${questrial.variable} antialiased`}
    >
      <body>
        <ReduxProvider> 
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
