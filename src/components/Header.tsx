'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/the-experiment', label: 'The Experiment' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#CBD4D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-[#2C3539] font-semibold text-base sm:text-lg leading-tight hover:text-[#61717A] transition-colors tracking-wide"
          >
            Lynchburg Marketing Company
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors uppercase ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-[#2C3539]'
                    : 'text-[#4C4C4C] hover:text-[#61717A]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold uppercase tracking-widest bg-[#61717A] text-white px-5 py-2 hover:bg-[#4f6069] transition-colors"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#4C4C4C] hover:text-[#61717A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#CBD4D7] py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#4C4C4C] hover:text-[#61717A] font-medium uppercase tracking-wide transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-sm font-semibold uppercase tracking-widest bg-[#61717A] text-white px-5 py-2 text-center hover:bg-[#4f6069] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
