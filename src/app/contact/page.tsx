import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Free Marketing Consultation | Lynchburg Marketing Company',
  description:
    'Get a free marketing consultation with Lynchburg Marketing Company. We help businesses in Lynchburg, VA get found on Google and grow.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Let&apos;s talk</p>
      <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
        Get Your Free Consultation
      </h1>
      <div className="border-b border-[#CBD4D7] mb-10" />
      <p className="text-[#61717A] text-lg mb-10 font-sans font-light leading-relaxed">
        Ready to grow your business in Lynchburg? Fill out the form below and we&apos;ll reach out to
        schedule your free marketing consultation — no pressure, no obligation.
      </p>

      <div className="overflow-hidden" style={{ height: '492px' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/lEGmlsfBKzqHmjEqdS4Q"
          style={{ width: '100%', height: '100%', border: 'none' }}
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

      <p className="mt-10 text-center text-sm text-[#97a8b0] font-sans">
        Or visit us directly at{' '}
        <a
          href="https://mullinsmediaco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#61717A] hover:text-[#2C3539] transition-colors font-medium"
        >
          mullinsmediaco.com
        </a>
      </p>
    </div>
  )
}
