import React from 'react'
import { EXPERIENCE, ExperienceType } from '../../misc/constants/experience'
import ExperienceBox from './ExperienceBox'

const Experience = () => {
  return (
    <section id="experience" className="px-10 bg-bone/30">
      <div className="relative">
        <div className="relative z-10">
          <p className="text-center text-3xl md:text-5xl font-martel font-bold pt-8 md:py-12">
            My experience
          </p>
          <div className="md:px-10 flex flex-col gap-y-5 pb-10">
            {EXPERIENCE.map((exp: ExperienceType, idx: number) => {
              const style = !!(idx % 2) ? 'justify-end' : 'justify-start'
              return (
                <div key={exp.title + idx} className={`flex ${style}`}>
                  <ExperienceBox {...exp} isEven={!!(idx % 2)} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
