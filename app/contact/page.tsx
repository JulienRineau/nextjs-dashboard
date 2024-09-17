import ContactForm from '@/app/ui/contact-form';

export default function ContactPage() {
  return (
    <div className="flex flex-grow items-center justify-center py-12 px-6 sm:px-12 lg:px-24">
      <div className="w-full max-w-xl lg:max-w-2xl space-y-8">
        <div className="text-center">
        <h2 className="text-2xl text-gray-800 md:text-3xl mb-4">
          Contact Us
        </h2>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}