import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import Link from 'next/link';

export default function ZeroShotLogo({ style = 'dark' }) {
  const textColor = style === 'dark' ? 'text-gray-800' : 'text-white';

  return (
    <Link
      className={`${lusitana.className} flex flex-row items-center leading-none ${textColor} text-xl md:text-2xl`}
      href="/"
    >
      <span>zeroshot</span>
    </Link>
  );
}
