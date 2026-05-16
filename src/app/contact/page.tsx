import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Lynchburg Marketing Company',
  description:
    'Get in touch with Lynchburg Marketing Company. We serve businesses throughout Lynchburg, VA.',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Contact Lynchburg Marketing Company
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Want to talk marketing? We&apos;d love to hear from you. Fill out the form below and we&apos;ll be
        in touch.
      </p>

      <ContactForm />

      <p className="mt-8 text-center text-gray-500">
        Or visit us at{' '}
        <a
          href="https://mullinsmediaco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E63946] hover:underline font-medium"
        >
          mullinsmediaco.com
        </a>
      </p>
    </div>
  )
}
