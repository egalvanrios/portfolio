import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/data'
import CaseStudyContent from '@/components/CaseStudyContent'

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

  return <CaseStudyContent cs={cs} nextCs={nextCs} />
}
