import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { useWindowSize } from '../hooks'

const Footer = () => {
  const style = { color: 'white', fontSize: '1.5em' }
  const { width } = useWindowSize()
  const isMobile = width < 768
  const contactStyle = 'flex gap-x-1'
  return (
    <>
      <footer className="bg-darkBlue h-40 flex justify-center items-center p-5">
        <div className="space-y-4 text-bone text-center font-karla">
          <p className="text-md font-martel">made with &#10084;&#65039;</p>
          <div>
            <p className="text-white pb-2">Contact me</p>
            <div className="flex gap-x-3 text-white">
              <a
                href="https://instagram.com/catherineeangel"
                target={'_blank'}
                rel="noreferrer"
                className={contactStyle}
              >
                <FaInstagram style={style} />
                {!isMobile && 'catherineeangel'}
              </a>
              <a
                href="mailto:catherineangelr@gmail.com"
                target={'_blank'}
                rel="noreferrer"
                className={contactStyle}
              >
                <FiMail style={style} />
                {!isMobile && 'catherineangelr@gmail.com'}
              </a>
              <a
                href="https://github.com/catherineeangel"
                target={'_blank'}
                rel="noreferrer"
                className={contactStyle}
              >
                <FaGithub style={style} />
                {!isMobile && 'catherineeangel'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
