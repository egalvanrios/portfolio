import Nav     from '@/components/Nav'
import Hero    from '@/components/sections/Hero'
import Work    from '@/components/sections/Work'
import About   from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  )
}
