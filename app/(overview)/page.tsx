import ZeroShotLogo from '@/app/ui/zeroshot-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ContactForm from '@/app/ui/contact-form';
import { Button } from '@/app/ui/button';

export default function Page() {
  return (
    <div className="flex flex-grow items-center justify-center pb-60">
      <div className="text-center px-6 w-full max-w-2xl">
        <h2 className="text-2xl text-gray-800 md:text-3xl mb-8">
          We're building the datasets that will power the robotic revolution.
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          <a href="mailto:interest@zeroshotdata.com" className="hover:underline">
            interest@zeroshotdata.com
          </a>
        </p>
        {/* <Link href="/contact" passHref>
          <Button>Contact Us</Button>
        </Link> */}
      </div>
    </div>
  );
}
