import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={className + ' text-blue-primary w-full font-normal'}>{children}</p>
  )
}

export default Paragraph