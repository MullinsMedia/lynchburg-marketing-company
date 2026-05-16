export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#2C3539] text-[#CBD4D7] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-white font-semibold text-lg tracking-wide">Lynchburg Marketing Company</p>
            <p className="text-sm text-[#97a8b0] mt-1">A Mullins Media Co experiment in SEO</p>
          </div>
          <div className="text-center md:text-right">
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
