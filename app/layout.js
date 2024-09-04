import './globals.css';
import AosInit from '@/components/AosInit.js';
import CurrentPageProvider from '@/components/CurrentPageProvider';

export const metadata = {
  title: 'Chike Creates',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AosInit />
      <body>
        <CurrentPageProvider>
          {children}
        </CurrentPageProvider>
      </body>
    </html>
  );
}
