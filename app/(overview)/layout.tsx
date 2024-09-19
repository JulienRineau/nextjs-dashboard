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
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between px-6">
        <ZeroShotLogo />
        <Link href="/login" className="text-gray-800 text-sm md:text-base hover:underline flex items-center">
          <span>Log in</span>
          <ArrowRightIcon className="w-4 md:w-5 ml-2" />
        </Link>
      </header>
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
