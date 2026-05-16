export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">Lynchburg Marketing Company</p>
            <p className="text-sm text-gray-400 mt-1">A Mullins Media Co experiment in SEO</p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="https://mullinsmediaco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E63946] hover:underline font-medium"
            >
              mullinsmediaco.com →
            </a>
            <p className="text-sm text-gray-500 mt-2">&copy; {year} Mullins Media Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
