import React from 'react'

const SecondaryButton = ({children, className, href}) => {
  return (
    <a href={href} 
    className={className + ' border border-dashed border-blue-primary text-center px-10 py-3 rounded-full text-blue-primary hover:bg-blue-primary transition duration-500 ease-in-out hover:text-white hover:shadow-blue-primary hover:shadow-lg'
    }>
        {children}
    </a>
  )
}

export default SecondaryButton