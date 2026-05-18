import Image from 'next/image'

const LOGO_HORIZONTAL = 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/b2938e5c-2c27-489f-ac2e-12d5b7e721aa/Lynchburg_Marketing_Company.png?format=750w'

export default function Footer() {
  const year = new Date().getFullYear()
  const phone = process.env.NEXT_PUBLIC_PHONE || '(434) 485-5739'

  return (
    <footer className="bg-[#2C3539] text-[#CBD4D7] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand + address */}
          <div>
            <Image
              src={LOGO_HORIZONTAL}
              alt="Lynchburg Marketing Company"
              width={320}
              height={90}
              className="h-16 w-auto mb-2"
            />
            <p className="text-sm text-[#97a8b0] mt-1">A Mullins Media Co brand</p>
            {/* Visible NAP for local SEO — address */}
            <address className="not-italic mt-3 text-sm text-[#97a8b0] leading-relaxed">
              <span itemProp="addressLocality">Lynchburg</span>,{' '}
              <span itemProp="addressRegion">VA</span>{' '}
              <span itemProp="addressCountry">USA</span>
              {phone && (
                <>
                  <br />
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    itemProp="telephone"
                    className="hover:text-white transition-colors"
                  >
                    {phone}
                  </a>
                </>
              )}
            </address>
          </div>

          {/* Links */}
          <div className="text-left md:text-right">
            <a
              href="https://mullinsmediaco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CBD4D7] hover:text-white transition-colors font-medium text-sm uppercase tracking-widest"
            >
              mullinsmediaco.com →
            </a>
            <p className="text-xs text-[#61717A] mt-2">&copy; {year} Mullins Media Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
