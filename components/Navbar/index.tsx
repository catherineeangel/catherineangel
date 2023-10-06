import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { NAVBAR_CONTENT } from '../../misc/constants/navbarContent'
import { useWindowSize } from '../hooks'

const Navbar = () => {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <nav className="h-16 w-full p-5 fixed z-20 bg-beige flex justify-between">
      <div className="-mt-3">
        <Image width={50} height={50} src="/images/logo.png" alt="logo" />
      </div>
      {/* <ul className="flex flex-row text-center font-karla justify-end gap-x-10 pr-10">
        {NAVBAR_CONTENT.map(({ title, href }) => {
          return (
            <button
              key={title}
              onClick={() => {
                router.push(href)
                title == 'About'
                  ? router.route == '/' &&
                    document.getElementById('about')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                      inline: 'center',
                    })
                  : title == 'Experience'
                  ? document.getElementById('experience')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center',
                    })
                  : ''
              }}
            >
              {title}
            </button>
          )
        })}
      </ul> */}
    </nav>
  )
}

export default Navbar
