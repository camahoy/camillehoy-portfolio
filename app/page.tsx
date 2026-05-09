import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tools from '@/components/Tools'
import Cited from '@/components/Cited'
import Experience from '@/components/Experience'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Tools />
        <hr className="section-divider" />
        <Cited />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
