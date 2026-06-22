import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import { caseStudies, contact } from '@/lib/data'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.client} — ${cs.tag} | Eric Galván`,
    description: cs.overview,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const nextCs = caseStudies.find((c) => c.slug === cs.nextProject)

  return (
    <>
      <Nav />

      <main className="bg-off-white min-h-screen">

        {/* Back link */}
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 pt-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-charcoal transition-colors duration-150"
          >
            ← All work
          </Link>
        </div>

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <header className="max-w-[1440px] mx-auto px-20 max-md:px-5 pt-12 pb-16 max-md:pt-8 max-md:pb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-widest text-stone">{cs.num}</span>
            <span className="text-sm font-medium text-charcoal">{cs.client}</span>
            <span className="text-xs bg-sand text-charcoal px-2.5 py-1 rounded">{cs.tag}</span>
          </div>

          <h1
            className="font-semibold tracking-tight text-charcoal mb-8 max-w-4xl leading-[1.08]"
            style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
          >
            {cs.title}
          </h1>

          <div className="flex items-center gap-5 text-sm text-warm-gray">
            <span>{cs.year}</span>
            <span className="w-px h-4 bg-stone" aria-hidden="true" />
            <span>{cs.role}</span>
          </div>
        </header>

        {/* ── Metrics strip ──────────────────────────────────────────────────── */}
        <div className="bg-sand">
          <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 py-10 max-md:py-8">
            <div className="grid grid-cols-3 gap-8 max-md:gap-4">
              {cs.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-2">
                  <span
                    className="font-semibold tracking-tight text-forest leading-none"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
                  >
                    {m.value}
                  </span>
                  <span className="text-sm text-slate max-md:text-xs">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hero image ─────────────────────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 pt-10">
          <div className="w-full h-64 md:h-96 rounded overflow-hidden bg-sand">
            <Image
              src={cs.image}
              alt={`${cs.client} — ${cs.title}`}
              width={1400}
              height={384}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* ── Body ───────────────────────────────────────────────────────────── */}
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-5">

          {/* Overview */}
          <section className="py-16 max-md:py-10 max-w-3xl">
            <p
              className="text-slate leading-relaxed"
              style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
            >
              {cs.overview}
            </p>
          </section>

          {cs.process && cs.process.length > 0 && (
            <>
              <hr className="border-stone/40" />
              <section className="py-16 max-md:py-10">
                <span className="text-xs tracking-widest text-warm-gray uppercase block mb-10">
                  Process
                </span>
                <div className="flex flex-col gap-10 max-w-3xl">
                  {cs.process.map((step, i) => (
                    <div key={step.title} className="flex gap-8 max-md:gap-5">
                      <span className="text-xs tracking-widest text-stone pt-[3px] w-6 shrink-0 select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-base font-semibold text-charcoal">{step.title}</h2>
                        <p className="text-sm text-slate leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {cs.outcome && (
            <>
              <hr className="border-stone/40" />
              <section className="py-16 max-md:py-10 max-w-3xl">
                <div className="flex gap-6">
                  <div
                    className="w-[3px] rounded-full bg-forest shrink-0 self-stretch"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-4">
                    <span className="text-xs tracking-widest text-warm-gray uppercase">Outcome</span>
                    <p
                      className="text-slate leading-relaxed"
                      style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
                    >
                      {cs.outcome}
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Next project */}
          {nextCs && (
            <div className="py-16 max-md:py-10 border-t border-stone/40">
              <span className="text-xs tracking-widest text-warm-gray uppercase block mb-5">
                Next project
              </span>
              <Link href={`/work/${nextCs.slug}`} className="group inline-flex items-center gap-3">
                <span
                  className="font-semibold tracking-tight text-charcoal group-hover:text-forest transition-colors duration-150 leading-tight"
                  style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
                >
                  {nextCs.title}
                </span>
                <span className="text-forest text-xl group-hover:translate-x-1 transition-transform duration-150 shrink-0">
                  →
                </span>
              </Link>
            </div>
          )}

        </div>
      </main>

      <footer className="border-t border-stone/40">
        <div className="max-w-[1440px] mx-auto px-20 max-md:px-5 py-6 flex items-center justify-between max-md:flex-col max-md:gap-2 max-md:items-start">
          <span className="text-xs text-warm-gray">{contact.footerText}</span>
          <span className="text-xs text-stone">{contact.footerCredit}</span>
        </div>
      </footer>
    </>
  )
}
