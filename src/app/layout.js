import { Header } from '@/components/header';
import '@/code/css/style.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}