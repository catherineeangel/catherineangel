import React, { FC, ReactNode } from 'react'

// bikin primary secondary button

interface ButtonProps {
  children: ReactNode
  type: 'primary' | 'secondary' | 'disabled'
  classname: string
}

const Button: FC<ButtonProps> = ({ children, type, classname }) => {
  const style = ''
  return <button className={`${classname}`}>{children}</button>
}

export default Button
