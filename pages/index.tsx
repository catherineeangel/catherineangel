// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { NextPage } from 'next'
import About from '../components/About'
import Experience from '../components/Experience'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex flex-col snap-proximity snap-y h-full">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default Home
