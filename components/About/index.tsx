import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <section id="about" className="h-auto p-10">
        <p className="font-martel text-3xl md:text-5xl font-semibold text-center py-8">
          Get to know me
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-y-5 md:gap-x-16 items-center">
          <div className="w-full md:w-[40%] text-left space-y-2">
            <p className="font-martel text-2xl md:text-4xl">
              Catherine Angel Robin
            </p>
            <p className="font-karla font-semibold">Computer Science Student</p>
            <p className="pt-3">
              As a Computer Science student I always thrive to learn more about
              the technology and its application. As people are more accustomed
              to having applications and softwares in day to day life, it brings
              out the curiosity in me to pursue a study in technology.
            </p>
            <p className="pt-3">
              There is always a fun and exciting thing to learn about Computer
              Science. I am eager to explore new things, specifically to enhance
              my programming skills in web development in addition to broaden my
              knowledge surrounding technology.
            </p>
          </div>
          <div className="w-[300px] h-[400px] md:w-[400px] md:h-[533px]">
            <div>
              <Image
                src={'/images/catherine2.jpg'}
                width={400}
                height={533}
                alt="Catherine"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
