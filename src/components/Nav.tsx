'use client'

import { useState, useEffect } from 'react'
import { navLinks } from '@/lib/data'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLanguage()
  const t = translations[lang].nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 bg-off-white border-b-[0.5px] transition-colors duration-200 ${
        scrolled ? 'border-stone' : 'border-transparent'
      }`}
    >
      {/* Desktop bar */}
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 h-16 flex items-center justify-between">

        <a
          href="/"
          className="font-semibold text-charcoal text-[18px] leading-none tracking-tight"
        >
          {t.logo}
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate hover:text-charcoal transition-colors duration-150"
              >
                {t.links[i]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1 text-xs font-medium"
          >
            <span className={lang === 'en' ? 'text-charcoal' : 'text-stone'}>EN</span>
            <span className="text-stone">|</span>
            <span className={lang === 'es' ? 'text-charcoal' : 'text-stone'}>ES</span>
          </button>

          <a
            href="/#contact"
            className="inline-flex items-center gap-1 bg-charcoal text-off-white text-sm font-medium px-5 py-2.5 rounded-[4px] hover:bg-slate transition-colors duration-150"
          >
            {t.cta}
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <span
            className={`absolute w-5 h-px bg-charcoal transition-all duration-200 ${
              menuOpen ? 'rotate-45' : '-translate-y-[6px]'
            }`}
          />
          <span
            className={`absolute w-5 h-px bg-charcoal transition-all duration-200 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`absolute w-5 h-px bg-charcoal transition-all duration-200 ${
              menuOpen ? '-rotate-45' : 'translate-y-[6px]'
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-off-white border-t border-stone/50 px-5 py-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-charcoal"
              onClick={closeMenu}
            >
              {t.links[i]}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="flex items-center gap-1 text-xs font-medium"
            >
              <span className={lang === 'en' ? 'text-charcoal' : 'text-stone'}>EN</span>
              <span className="text-stone">|</span>
              <span className={lang === 'es' ? 'text-charcoal' : 'text-stone'}>ES</span>
            </button>
          </div>
          <a
            href="/#contact"
            className="mt-2 inline-flex items-center justify-center bg-charcoal text-off-white text-sm font-medium px-5 py-3 rounded-[4px]"
            onClick={closeMenu}
          >
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  )
}
