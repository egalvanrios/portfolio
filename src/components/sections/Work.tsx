'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import { caseStudies } from '@/lib/data'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/i18n'

export default function Work() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const { lang } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target) // animate once only
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="bg-off-white">
      <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 py-24">

        {/* Section header */}
        <div className="flex items-end justify-between gap-4 mb-14 max-md:mb-10 max-md:flex-col max-md:items-start">
          <h2
            className="font-semibold tracking-tight text-charcoal"
            style={{ fontSize: 'clamp(32px, 3.5vw, 44px)' }}
          >
            {t.work.heading}
          </h2>
          <span className="text-sm text-warm-gray">{t.work.subheading}</span>
        </div>

        {/* Cards — gap-0.5 = 2px; section bg-off-white shows through as separator */}
        <div className="flex flex-col gap-0.5">
          {caseStudies.map((study, i) => {
            const cs = t.caseStudies[study.id]
            return (
              <div
                key={study.id}
                ref={(el) => { cardRefs.current[i] = el }}
                className="card-animate bg-white rounded p-12 max-md:p-6"
                style={{ '--delay': `${i * 100}ms` } as CSSProperties}
              >

                {/* ── Desktop layout ─────────────────────────────────────── */}
                <div className="hidden md:flex items-start gap-12">

                  {/* Left col: case number + accent dot */}
                  <div className="w-16 shrink-0 flex flex-col items-start gap-3 pt-1">
                    <span className="text-xs tracking-widest text-stone">{study.num}</span>
                    <span
                      aria-hidden="true"
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: study.accentColor }}
                    />
                  </div>

                  {/* Thumbnail */}
                  <div className="w-40 h-32 shrink-0 rounded overflow-hidden bg-charcoal">
                    <Image
                      src={study.image}
                      alt={`${study.client} — ${study.title}`}
                      width={160}
                      height={128}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Middle col: client/tag, title, challenge, CTA */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-charcoal">{study.client}</span>
                      <span className="text-xs bg-sand text-charcoal px-2.5 py-1 rounded">
                        {study.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-charcoal leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed max-w-2xl">
                      {cs?.challenge ?? study.challenge}
                    </p>
                    <a
                      href={`/work/${study.slug}`}
                      className="text-sm font-medium text-forest hover:text-olive transition-colors duration-150 w-fit"
                    >
                      {t.work.viewCaseStudy}
                    </a>
                  </div>

                  {/* Right col: 3 metrics */}
                  <div className="w-80 shrink-0 grid grid-cols-3 gap-6 pt-1">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col gap-1.5">
                        <span className="text-2xl font-semibold tracking-tight text-forest leading-none">
                          {metric.value}
                        </span>
                        <span className="text-xs text-warm-gray leading-tight">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ── Mobile layout ──────────────────────────────────────── */}
                <div className="md:hidden flex flex-col gap-5">

                  {/* Hero image */}
                  <div className="h-44 rounded-sm overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.client} — ${study.title}`}
                      width={800}
                      height={176}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Client/tag, title, challenge, CTA */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-charcoal">{study.client}</span>
                      <span className="text-xs bg-sand text-charcoal px-2.5 py-1 rounded">
                        {study.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-charcoal leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed">
                      {cs?.challenge ?? study.challenge}
                    </p>
                    <a href={`/work/${study.slug}`} className="text-sm font-medium text-forest w-fit">
                      {t.work.viewCaseStudy}
                    </a>
                  </div>

                  {/* Metrics strip */}
                  <div className="bg-off-white rounded grid grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col gap-1.5 p-4">
                        <span className="text-lg font-semibold tracking-tight text-forest leading-none">
                          {metric.value}
                        </span>
                        <span className="text-xs text-warm-gray leading-tight">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
