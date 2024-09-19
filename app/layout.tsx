import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
import ZeroShotLogo from '@/app/ui/zeroshot-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
