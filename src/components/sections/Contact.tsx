'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { contact, contactLinks } from '@/lib/data'

// Button styling keyed by contactLink id — portfolio link is excluded from this section
const buttonVariants: Record<string, string> = {
  whatsapp: 'bg-forest text-white hover:bg-olive',
  email:    'border border-stone text-charcoal hover:bg-sand',
  linkedin: 'border border-stone text-charcoal hover:bg-sand',
}

export default function Contact() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const buttons = contactLinks.filter((l) => l.id !== 'portfolio')

  return (
    <section id="contact" className="bg-off-white">
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 py-24">

        <div
          ref={contentRef}
          className="card-animate"
          style={{ '--delay': '0ms' } as CSSProperties}
        >
          {/* Eyebrow */}
          <p className="text-xs tracking-widest text-forest uppercase font-medium mb-12">
            {contact.eyebrow}
          </p>

          {/* Headline */}
          <h2
            className="font-semibold tracking-tight text-charcoal max-w-3xl"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.08 }}
          >
            {contact.headline}
          </h2>

          {/* Forest accent bar */}
          <div className="w-14 h-0.5 bg-forest mt-4 mb-10" />

          {/* Subtext */}
          <p className="text-slate text-lg leading-relaxed max-w-xl mb-16">
            {contact.subtext}
          </p>

          {/* Contact buttons */}
          <div className="flex gap-4 max-md:flex-col">
            {buttons.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  'inline-flex items-center justify-center px-7 py-4 rounded text-sm font-medium transition-colors duration-150 max-md:w-full',
                  buttonVariants[link.id] ?? 'border border-stone text-charcoal hover:bg-sand',
                ].join(' ')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone mt-24 mb-8" />

        {/* Footer */}
        <footer className="flex items-center justify-between gap-6 max-md:flex-col max-md:items-start">
          <p className="text-xs text-warm-gray">{contact.footerText}</p>
          <p className="text-xs text-slate">{contact.footerCredit}</p>
        </footer>

      </div>
    </section>
  )
}
