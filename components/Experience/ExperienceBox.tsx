import Image from 'next/image'
import React, { FC } from 'react'
import { ExperienceType } from '../../misc/constants/experience'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'
import { Tooltip } from '@mui/material'

const ExperienceBox: FC<ExperienceType> = ({
  title,
  link,
  when,
  where,
  desc,
  techStack,
  imgUrl,
  isEven,
}) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        isEven ? `md:flex-row-reverse` : `md:flex-row`
      } gap-3 md:gap-5 items-center`}
    >
      <div className="w-full md:w-[600px] border-2 border-rose rounded p-4 font-martel">
        <p className="text-xl md:text-2xl">{title}</p>
        <p className="font-semibold">{where}</p>
        <p className="font-karla text-sm">{when}</p>
        <div className="text-[15px] font-karla py-3">
          {desc.map((des, idx) => {
            return (
              <div key={idx}>
                <VscDebugBreakpointLogUnverified className="inline" />
                {des}
              </div>
            )
          })}
        </div>
      </div>
      {!!imgUrl && (
        <Tooltip title={!!link ? `Visit ` + link : ''}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-105 transition-all"
          >
            <div className="rounded-xl">
              <Image
                alt="docs"
                src={imgUrl}
                width={400}
                height={300}
                objectFit="contain"
              />
            </div>
          </a>
        </Tooltip>
      )}
    </div>
  )
}

export default ExperienceBox
