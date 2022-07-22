import Image from 'next/image'
import React from 'react'
import { NAVBAR_CONTENT } from '../../misc/constants/navbarContent'
import { scrollToSection } from '../func'
import { useWindowSize } from '../hooks'

const Navbar = () => {
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <nav className="h-16 w-full p-5 fixed z-20 bg-beige flex justify-between">
      <div className="-mt-3">
        <Image width={50} height={50} src="/images/logo.png" alt="logo" />
      </div>
      <ul className="flex flex-row text-center font-karla justify-end gap-x-10 pr-10">
        {NAVBAR_CONTENT.map(({ title, href }) => {
          return (
            <a key={title} href={href}>
              {title}
            </a>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
