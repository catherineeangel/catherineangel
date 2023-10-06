// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { NextPage } from 'next'
import About from '../components/About'
import Experience from '../components/Experience'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
    </div>
  )
}

export default Home
