import { Menu } from 'lucide-react'
import { useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-inner" />
            <span className="font-semibold">My Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/60 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="block w-full text-left py-2 text-gray-800"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
