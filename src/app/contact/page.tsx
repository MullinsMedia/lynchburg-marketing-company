import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Free Marketing Consultation | Lynchburg Marketing Company',
  description:
    'Get a free marketing consultation with Lynchburg Marketing Company. We help businesses in Lynchburg, VA get found on Google and grow.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Get Your Free Consultation
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Ready to grow your business in Lynchburg? Fill out the form below and we&apos;ll reach out to
        schedule your free marketing consultation — no pressure, no obligation.
      </p>

      <div className="rounded-lg overflow-hidden" style={{ height: '492px' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/lEGmlsfBKzqHmjEqdS4Q"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
          id="inline-lEGmlsfBKzqHmjEqdS4Q"
          data-layout="{&apos;id&apos;:&apos;INLINE&apos;}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Lynchburg Marketing Company"
          data-height="492"
          data-layout-iframe-id="inline-lEGmlsfBKzqHmjEqdS4Q"
          data-form-id="lEGmlsfBKzqHmjEqdS4Q"
          title="Lynchburg Marketing Company"
        />
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />

      <p className="mt-8 text-center text-gray-500">
        Or visit us directly at{' '}
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
