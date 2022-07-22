import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    // <section className="h-screen bg-gradient-to-r from-peach">
    <section className="relative h-screen bg-beige flex items-center">
      <div className="absolute right-0 hidden md:block pr-20">
        <Image
          src={'/images/catherine1.png'}
          width={400}
          height={600}
          alt="catherine"
          objectFit="cover"
        />
      </div>
      <div className="">
        <div className="relative z-10 pl-10 md:pl-20 font-martel text-6xl tracking-widest leading-tight">
          <p>Hi, there!</p>
          <p>
            I&apos;m
            <span className="italic shadow shadow-rose text-coral">
              Catherine Angel
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
