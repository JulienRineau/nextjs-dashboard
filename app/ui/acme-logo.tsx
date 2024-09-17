import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import Link from 'next/link';

export default function AcmeLogo() {
  return (
    <Link
      className={`${lusitana.className} flex flex-row items-center leading-none text-gray-800 text-xl md:text-2xl`}
      href="/"
    >
      <span>zeroshot</span>
    </Link>
  );
}
