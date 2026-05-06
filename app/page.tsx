import CustomCursor from '@/components/CustomCursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tools from '@/components/Tools'
import Cited from '@/components/Cited'
import Capabilities from '@/components/Capabilities'
import Experience from '@/components/Experience'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Tools />
        <Cited />
        <Capabilities />
        <Experience />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
