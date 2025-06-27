import React from 'react'

const SecondaryButton = ({children, className, href}) => {
  return (
    <a href={href} 
    className={className + ' border border-dashed border-blue-primary text-center px-10 py-3 rounded-full text-blue-primary hover:bg-blue-primary transition duration-100 ease-in-out hover:text-white'
      
    }>
        {children}
    </a>
  )
}

export default SecondaryButton