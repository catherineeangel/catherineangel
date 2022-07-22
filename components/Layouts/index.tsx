import React, { FC, ReactNode } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
