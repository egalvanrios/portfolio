import { hero } from '@/lib/data'

export default function Hero() {
  const [before, after] = hero.headline.split(hero.headlineHighlight)

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-off-white overflow-hidden flex flex-col justify-center"
    >
      {/* Mist blob — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 w-[700px] h-[700px]"
        style={{
          background: 'radial-gradient(circle at center, var(--color-mist) 0%, transparent 65%)',
          opacity: 0.85,
        }}
      />

      {/* Olive blob — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle at center, var(--color-olive) 0%, transparent 65%)',
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-20 max-md:px-5 py-24">

        {/* Eyebrow */}
        <div
          className="animate-fade-up flex items-center gap-2 mb-8"
          style={{ animationDelay: '0ms' }}
        >
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-forest shrink-0"
          />
          <span className="text-xs tracking-widest uppercase font-medium text-forest">
            {hero.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up font-semibold tracking-tight text-charcoal max-w-4xl mb-6"
          style={{
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.1,
            animationDelay: '80ms',
          }}
        >
          {before}
          <span className="text-forest">{hero.headlineHighlight}</span>
          {after}
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up text-slate max-w-xl leading-relaxed text-base md:text-lg mb-10"
          style={{ animationDelay: '160ms' }}
        >
          {hero.subheading}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex items-center gap-6 flex-wrap mb-16"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center bg-charcoal text-off-white text-sm font-medium px-6 py-3 rounded hover:bg-slate transition-colors duration-150"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="text-sm font-medium text-warm-gray hover:text-charcoal transition-colors duration-150"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        {/* Company pills */}
        <div
          className="animate-fade-up flex items-center gap-3 flex-wrap"
          style={{ animationDelay: '320ms' }}
        >
          <span className="text-xs text-warm-gray mr-1">{hero.companiesLabel}</span>
          {hero.companies.map((company) => (
            <span
              key={company}
              className="text-xs text-charcoal bg-sand px-3 py-1.5 rounded"
            >
              {company}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
