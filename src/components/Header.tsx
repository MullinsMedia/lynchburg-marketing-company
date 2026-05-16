'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link href="/" className="text-[#E63946] font-bold text-lg sm:text-xl leading-tight hover:opacity-80 transition-opacity">
            Lynchburg Marketing Company
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#E63946] hover:bg-gray-100 transition-colors"
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
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#E63946] font-medium transition-colors" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
