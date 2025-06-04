import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={className + ' text-blue-primary w-full text-lg'}>{children}</p>
  )
}

export default Paragraph