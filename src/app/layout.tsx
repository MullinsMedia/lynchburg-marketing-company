import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'),
  title: {
    default: 'Lynchburg Marketing Company',
    template: '%s | Lynchburg Marketing Company',
  },
  description:
    'Lynchburg Marketing Company provides SEO, advertising, and digital marketing services in Lynchburg, VA. A Mullins Media Co brand.',
  openGraph: {
    siteName: 'Lynchburg Marketing Company',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} h-full antialiased`}>
      <head>
        {ga4Id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ga4Id}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F6F6] text-[#4C4C4C] font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
