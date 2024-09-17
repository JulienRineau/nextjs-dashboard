import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
import AcmeLogo from '@/app/ui/acme-logo';
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
          <div className="flex h-16 shrink-0 items-center justify-between px-6">
            <AcmeLogo />
            <Link href="/login" className="text-gray-800 text-sm md:text-base hover:underline flex items-center">
              <span>Log in</span>
              <ArrowRightIcon className="w-4 md:w-5 ml-2" />
            </Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
