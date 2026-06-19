'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { about, aboutParagraphs, certifications, expertise } from '@/lib/data'

export default function About() {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="bg-off-white">
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 py-24">
        <div className="flex gap-16 max-md:flex-col">

          {/* ── Left column ────────────────────────────────────────────── */}
          <div
            ref={leftRef}
            className="card-animate w-80 shrink-0 max-md:w-full"
            style={{ '--delay': '0ms' } as CSSProperties}
          >
            {/* Name — two lines */}
            <h2
              className="font-semibold tracking-tight text-charcoal text-5xl max-md:text-4xl"
              style={{ lineHeight: 1.08 }}
            >
              <span className="block">{about.nameLines[0]}</span>
              <span className="block">{about.nameLines[1]}</span>
            </h2>

            <p className="text-sm text-slate mt-4">{about.role}</p>
            <p className="text-xs text-warm-gray mt-1">{about.location}</p>

            {/* Divider */}
            <div className="border-t border-stone mt-8 mb-8" />

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {about.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-forest hover:text-olive transition-colors duration-150 w-fit"
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Second divider */}
            <div className="border-t border-stone mt-8 mb-8" />

            {/* Certifications */}
            <p className="text-xs tracking-widest text-warm-gray uppercase mb-3">
              {about.certificationsLabel}
            </p>
            <div className="flex flex-col gap-1.5">
              {certifications.map((cert) => (
                <p key={cert.name} className="text-xs text-slate leading-relaxed">
                  {cert.name}
                </p>
              ))}
            </div>
          </div>

          {/* ── Right column ───────────────────────────────────────────── */}
          <div
            ref={rightRef}
            className="card-animate flex-1"
            style={{ '--delay': '100ms' } as CSSProperties}
          >
            {/* Pull quote */}
            <blockquote
              className="font-semibold tracking-tight text-charcoal max-w-2xl"
              style={{ fontSize: 'clamp(28px, 3vw, 36px)', lineHeight: 1.2 }}
            >
              {about.pullQuote}
            </blockquote>

            {/* Forest accent bar */}
            <div className="w-12 h-0.5 bg-forest mt-4 mb-8" />

            {/* Body paragraphs */}
            <div className="space-y-5">
              {aboutParagraphs.map((para, i) => (
                <p key={i} className="text-base text-slate leading-[1.68]">
                  {para}
                </p>
              ))}
            </div>

            {/* Core expertise */}
            <p className="text-xs tracking-widest text-warm-gray uppercase mt-12 mb-4">
              {about.expertiseLabel}
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-forest shrink-0"
                  />
                  <span className="text-sm text-slate leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
